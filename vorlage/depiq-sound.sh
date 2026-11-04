#!/bin/bash
# Legt den eigenen depiq-Sound unter ein Video: Hintergrund (musik/depiq-sound/hintergrund.mp3, bei Bedarf wiederholt)
# leise (-22 LUFS) und den Erkennungston (logo.mp3, Variante B) auf die letzten 3 Sekunden.
# Aufruf: bash vorlage/depiq-sound.sh <eingabe.mp4> <ausgabe.mp4>
# Erlaubt auf ALLEN Kanälen (eigener, synthetischer Sound, Rechte bei depiq; RICHTLINIEN §4a0).
set -e
ein="$1"; aus="$2"; cd "$(dirname "$0")/.."
d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$ein")
lst=$(python3 -c "print(max(0,$d-3.0))"); ms=$(python3 -c "print(int(max(0,$d-3.0)*1000))"); fo=$(python3 -c "print(max(0,$d-3.5))")
ffmpeg -y -loglevel error -i "$ein" -stream_loop -1 -i musik/depiq-sound/hintergrund.mp3 -i musik/depiq-sound/logo.mp3 \
 -filter_complex "[1:a]atrim=0:$d,loudnorm=I=-22:TP=-3:LRA=7,afade=t=in:d=0.5,afade=t=out:st=$fo:d=1.0[h];[2:a]adelay=$ms|$ms,volume=0.8[l];[h][l]amix=inputs=2:normalize=0,atrim=0:$d[a]" \
 -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 160k -movflags +faststart "$aus"
echo "depiq-Sound unter $aus gelegt"
