# Erzeugt den depiq-Sound rein synthetisch (keine Samples, keine fremde Musik).
# Aufruf: python3 musik/depiq-sound/erzeuge.py  → logo.wav, hintergrund.wav
import numpy as np, scipy.io.wavfile as wf, scipy.signal as sg, os
SR=48000; hier=os.path.dirname(os.path.abspath(__file__))
def hz(m): return 440*2**((m-69)/12)
def glocke(f,dauer,laut=1.0):
    t=np.arange(int(SR*dauer))/SR
    # weicher Glocken-/Marimbaton: Grundton + leise Obertöne, schneller Anschlag, exponentielles Ausklingen
    s=(np.sin(2*np.pi*f*t)+0.35*np.sin(2*np.pi*2*f*t)*np.exp(-t*6)+0.12*np.sin(2*np.pi*3.01*f*t)*np.exp(-t*9)+0.05*np.sin(2*np.pi*4.2*f*t)*np.exp(-t*14))
    hulle=np.minimum(1,t/0.004)*np.exp(-t*2.2)
    return laut*s*hulle
def flaeche(freqs,dauer,laut=0.2):
    t=np.arange(int(SR*dauer))/SR; s=np.zeros_like(t)
    for f in freqs:
        for d in (-0.15,0,0.15):  # leicht verstimmt = warm
            s+=np.sin(2*np.pi*(f+d)*t+np.random.rand()*6)
    a=np.minimum(1,t/1.2); r=np.minimum(1,(dauer-t)/1.2)
    return laut*s/len(freqs)/3*a*r
def hall(x,mix=0.25):
    ir_t=np.arange(int(SR*1.8))/SR
    rng=np.random.default_rng(7); ir=rng.standard_normal(len(ir_t))*np.exp(-ir_t*3.2)
    ir=sg.lfilter([1],[1,-0.6],ir); ir/=np.abs(ir).sum()**0.5*30
    w=sg.fftconvolve(x,ir)[:len(x)+len(ir_t)]
    y=np.zeros(len(w)); y[:len(x)]=x*(1-mix); return y+w*mix
def norm(x,db=-1.0):
    return x/np.max(np.abs(x))*10**(db/20)
def stereo(x,breite=0.003):
    v=int(SR*breite); l=x; r=np.concatenate([np.zeros(v),x[:-v]]); return np.stack([l,r],1)
# 1) Sound-Logo: vier aufsteigende Töne wie die vier Balken im Logo, dann ein Akkord (C-Dur, freundlich, „geht nach oben“)
noten=[72,76,79,84]  # C5 E5 G5 C6
L=np.zeros(int(SR*3.2))
for i,m in enumerate(noten):
    st=int(SR*0.16*i); g=glocke(hz(m),2.6,0.55+0.1*i); L[st:st+len(g)]+=g[:len(L)-st]
st=int(SR*0.72); ak=sum(glocke(hz(m),2.4,0.35) for m in (60,67,76,84)); L[st:st+len(ak)]+=ak[:len(L)-st]
L=norm(hall(L,0.3),-1.5); wf.write(os.path.join(hier,'logo.wav'),SR,(stereo(L)*32767).astype(np.int16))
# 2) Hintergrund: ruhige Akkordflächen + sparsames Glockenmotiv, 32 Sekunden, nahtlos wiederholbar gedacht
akk=[(48,55,64,71),(45,52,60,67),(41,48,57,64),(43,50,59,65)]  # Cmaj7 Am7 Fmaj7 G7(sus)
taktd=4.0; H=np.zeros(int(SR*32)+SR*2)
for k in range(8):
    a=akk[k%4]; st=int(SR*taktd*k); f=flaeche([hz(m) for m in a],taktd+1.2,0.5)
    H[st:st+len(f)]+=f
    for j,m in enumerate((a[2]+12,a[3]+12,a[1]+24)):
        g=glocke(hz(m),2.5,0.12); s2=st+int(SR*(0.5+j*1.1)); H[s2:s2+len(g)]+=g[:len(H)-s2]
H=H[:int(SR*32)]; e=int(SR*1.5); H[-e:]*=np.linspace(1,0,e); H[:int(SR*0.5)]*=np.linspace(0,1,int(SR*0.5))
H=norm(hall(H,0.35)[:int(SR*32)],-6); wf.write(os.path.join(hier,'hintergrund.wav'),SR,(stereo(H)*32767).astype(np.int16))
print('fertig')
