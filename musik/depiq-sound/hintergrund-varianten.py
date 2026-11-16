# Drei neue Varianten für den depiq-Hintergrund (16.11.2026, Jürgen: „Musik passt noch nicht, angenehmere Musik wählen“).
# Rein synthetisch (numpy), keine Samples, keine fremde Musik, Rechte bei depiq. 90 Schläge pro Minute, 12 Takte = 32 s, nahtlos wiederholbar.
# Aufruf: python3 musik/depiq-sound/hintergrund-varianten.py  → hintergrund-A-piano.wav, -B-gitarre.wav, -C-lofi.wav
import numpy as np, scipy.io.wavfile as wf, scipy.signal as sg, os
SR = 48000; hier = os.path.dirname(os.path.abspath(__file__)); rng = np.random.default_rng(11)
BPM = 90; SCHLAG = 60 / BPM; TAKT = 4 * SCHLAG; TAKTE = 12; LAENGE = TAKT * TAKTE
def hz(m): return 440 * 2 ** ((m - 69) / 12)
def leer(): return np.zeros(int(SR * (LAENGE + 4)))
def setze(buf, sig, sek):
    st = int(SR * sek) % int(SR * LAENGE)  # was über das Ende hinausragt, läuft vorn weiter → nahtlose Schleife
    n = min(len(sig), len(buf) - st); buf[st:st + n] += sig[:n]
def epiano(f, dauer, laut):  # weiches E-Piano (FM): warm, rund, kein harter Anschlag
    t = np.arange(int(SR * dauer)) / SR; idx = 1.2 * np.exp(-t * 2.5)
    s = np.sin(2 * np.pi * f * t + idx * np.sin(2 * np.pi * f * t)) + 0.06 * np.sin(2 * np.pi * 14 * f * t) * np.exp(-t * 25)
    env = np.minimum(1, t / 0.008) * np.exp(-t * 0.9) * (1 + 0.04 * np.sin(2 * np.pi * 4.5 * t))
    return laut * s * env
def zupf(f, dauer, laut):  # gezupfte Gitarre (Karplus-Strong)
    n = int(SR * dauer); p = max(2, int(SR / f)); buf = rng.uniform(-1, 1, p); y = np.zeros(n)
    for i in range(n):
        y[i] = buf[i % p]; buf[i % p] = 0.996 * 0.5 * (buf[i % p] + buf[(i + 1) % p])
    return laut * sg.lfilter([0.3], [1, -0.7], y)
def flaeche(ms, dauer, laut):  # leise, warme Fläche
    t = np.arange(int(SR * dauer)) / SR; s = np.zeros_like(t)
    for m in ms:
        for d in (-0.12, 0.12): s += np.sin(2 * np.pi * (hz(m) + d) * t + rng.random() * 6)
    env = np.minimum(1, t / 0.8) * np.minimum(1, (dauer - t) / 0.8)
    return laut * s / len(ms) / 2 * env
def bass(m, dauer, laut):
    t = np.arange(int(SR * dauer)) / SR; f = hz(m)
    return laut * (np.sin(2 * np.pi * f * t) + 0.25 * np.sin(4 * np.pi * f * t)) * np.minimum(1, t / 0.01) * np.exp(-t * 1.6)
def kick(laut):
    t = np.arange(int(SR * 0.35)) / SR; f = 50 + 70 * np.exp(-t * 30)
    return laut * np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 11)
def shaker(laut):
    n = rng.standard_normal(int(SR * 0.09)); n = sg.lfilter(*sg.butter(2, [5000, 11000], 'band', fs=SR), n)
    t = np.arange(len(n)) / SR; return laut * n * np.minimum(1, t / 0.01) * np.exp(-t * 45)
def hall(x, mix):
    t = np.arange(int(SR * 2.2)) / SR; ir = rng.standard_normal(len(t)) * np.exp(-t * 2.6)
    ir = sg.lfilter([1], [1, -0.55], ir); ir /= np.sqrt(np.sum(ir ** 2)) * 6
    return x * (1 - mix) + sg.fftconvolve(x, ir)[:len(x)] * mix
def fertig(buf, name, db=-6):
    n = int(SR * LAENGE); buf = buf[:n] + np.concatenate([buf[n:n * 2], np.zeros(max(0, 2 * n - len(buf)))])[:n]  # Ausklang an den Anfang falten
    buf = sg.lfilter(*sg.butter(1, 9000, 'low', fs=SR), buf)
    buf = buf / np.max(np.abs(buf)) * 10 ** (db / 20)
    st = np.stack([buf, np.roll(buf, int(SR * 0.004))], 1)
    wf.write(os.path.join(hier, name), SR, (st * 32767).astype(np.int16)); print('fertig', name)
# Akkordfolge C-Dur, freundlich und ruhig: Cmaj9 – Am9 – Fmaj9 – G6 (I – vi – IV – V)
AKK = [(48, 64, 67, 71, 74), (45, 60, 64, 67, 71), (41, 57, 60, 64, 67), (43, 59, 62, 64, 67)]
# A) Piano: ruhiges E-Piano, gebrochene Akkorde, weicher Bass, kein Schlagzeug
A = leer()
for k in range(TAKTE):
    b, *o = AKK[k % 4]; t0 = k * TAKT
    setze(A, bass(b, TAKT, 0.5), t0)
    setze(A, sum(epiano(hz(m), 3.5, 0.18) for m in o), t0)
    for j, m in enumerate((o[1] + 12, o[2] + 12, o[3] + 12, o[2] + 12)):
        setze(A, epiano(hz(m), 2.5, 0.13), t0 + (j + 0.5) * SCHLAG * (1 if j < 2 else 1))
fertig(hall(A, 0.3), 'hintergrund-A-piano.wav')
# B) Gitarre: gezupfte Achtel über warmer Fläche, hell und freundlich
B = leer()
for k in range(TAKTE):
    b, *o = AKK[k % 4]; t0 = k * TAKT
    setze(B, flaeche(o, TAKT + 0.8, 0.22), t0)
    setze(B, bass(b, TAKT, 0.35), t0)
    muster = (b + 12, o[1], o[2], o[3], o[2] + 12, o[3], o[2], o[1])
    for j, m in enumerate(muster):
        setze(B, zupf(hz(m), 1.6, 0.32 if j % 2 == 0 else 0.24), t0 + j * SCHLAG / 2)
fertig(hall(B, 0.25), 'hintergrund-B-gitarre.wav')
# C) Lo-Fi: E-Piano-Akkorde, weicher Bass, leiser Beat (Kick auf 1 und 3, Shaker auf Achteln) – modern, entspannt
C = leer()
for k in range(TAKTE):
    b, *o = AKK[k % 4]; t0 = k * TAKT
    setze(C, sum(epiano(hz(m - 12 if m > 70 else m), 3.6, 0.17) for m in o), t0)
    setze(C, sum(epiano(hz(m), 1.8, 0.09) for m in o[1:4]), t0 + 2.5 * SCHLAG)
    setze(C, bass(b, TAKT * 0.5, 0.55), t0); setze(C, bass(b + 7, TAKT * 0.5, 0.45), t0 + 2 * SCHLAG)
    for s in (0, 2): setze(C, kick(0.45), t0 + s * SCHLAG)
    for j in range(8): setze(C, shaker(0.06 if j % 2 else 0.035), t0 + j * SCHLAG / 2 + (0.03 if j % 2 else 0))
fertig(hall(C, 0.22), 'hintergrund-C-lofi.wav')
