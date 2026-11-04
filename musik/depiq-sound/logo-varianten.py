# Drei weichere Varianten für den Erkennungston (synthetisch, ohne Samples).
import numpy as np, scipy.io.wavfile as wf, scipy.signal as sg, os, subprocess
SR=48000; hier=os.path.dirname(os.path.abspath(__file__))
def hz(m): return 440*2**((m-69)/12)
def weich(f,dauer,laut,abkl=1.6):   # fast reiner Sinus, sanfter Anschlag: wie ein weiches Elektro-Piano
    t=np.arange(int(SR*dauer))/SR
    s=np.sin(2*np.pi*f*t)+0.18*np.sin(2*np.pi*2*f*t)*np.exp(-t*4)
    return laut*s*np.minimum(1,t/0.02)*np.exp(-t*abkl)
def flaeche(freqs,dauer,laut,an=0.6,ab=1.4):
    t=np.arange(int(SR*dauer))/SR; s=sum(np.sin(2*np.pi*(f+d)*t) for f in freqs for d in (-0.2,0,0.2))
    return laut*s/len(freqs)/3*np.minimum(1,t/an)*np.minimum(1,np.maximum(0,(dauer-t)/ab))
def tief(x,fc=3500): b,a=sg.butter(2,fc/(SR/2)); return sg.lfilter(b,a,x)
def hall(x,mix=0.3):
    t=np.arange(int(SR*2.0))/SR; ir=np.random.default_rng(3).standard_normal(len(t))*np.exp(-t*2.8)
    ir=sg.lfilter([1],[1,-0.7],ir); w=sg.fftconvolve(x,ir); w/=np.max(np.abs(w))+1e-9
    y=np.zeros(len(w)); y[:len(x)]=x/np.max(np.abs(x))*(1-mix); return y+w*mix
def speichern(name,x):
    x=x/np.max(np.abs(x))*10**(-3/20); v=int(SR*0.003)
    st=np.stack([x,np.concatenate([np.zeros(v),x[:-v]])],1)
    wf.write(f'{hier}/{name}.wav',SR,(st*32767).astype(np.int16))
    subprocess.run(['ffmpeg','-loglevel','error','-y','-i',f'{hier}/{name}.wav','-b:a','192k',f'{hier}/{name}.mp3']); os.remove(f'{hier}/{name}.wav')
def leer(s): return np.zeros(int(SR*s))
# A: zwei sanfte Töne (Quinte aufwärts G4 → D5) über einer warmen Fläche – ruhig, „alles im Griff“
A=leer(3.0); A[:]+=flaeche([hz(55),hz(62),hz(67)],3.0,0.45)
for st,m in ((0.15,67),(0.55,74)): g=weich(hz(m),2.4,0.6); i=int(SR*st); A[i:i+len(g)]+=g[:len(A)-i]
speichern('logo-A-zwei-toene',hall(tief(A),0.35))
# B: drei weiche Töne tief und langsam (C4 E4 G4), wie das Hintergrundstück – passt zur Musik
B=leer(3.0)
for k,m in enumerate((60,64,67)): g=weich(hz(m),2.6,0.55,1.3); i=int(SR*(0.1+0.32*k)); B[i:i+len(g)]+=g[:len(B)-i]
B+=flaeche([hz(48),hz(55),hz(64)],3.0,0.3,1.0)
speichern('logo-B-drei-toene',hall(tief(B,3000),0.4))
# C: nur eine aufsteigende Klangfläche (wie ein „Aufatmen“), ohne einzelne Töne – am dezentesten
C=leer(2.6); t=np.arange(len(C))/SR
for m in (48,55,60,64,67):
    f=hz(m)*(1+0.03*np.minimum(1,t/1.0)); C+=np.sin(2*np.pi*np.cumsum(f)/SR)
C*=np.minimum(1,t/0.9)*np.minimum(1,np.maximum(0,(2.6-t)/1.0))
speichern('logo-C-klangflaeche',hall(tief(C,2500),0.4))
print('fertig')
