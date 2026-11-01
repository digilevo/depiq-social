#!/bin/bash
# Legt Musik unter ein Reel (ersetzt die stille Tonspur). Aufruf: bash vorlage/musik.sh <reel.mp4> <ruhig|heiter|inspirierend>
# Musik aus musik/ (YouTube Audio-Mediathek, keine Namensnennung erforderlich). Ab Sekunde 45 (nach dem Intro),
# leise im Hintergrund (Lautheit -20 LUFS), 0,5 s einblenden, 1,5 s ausblenden. Video wird nicht neu kodiert.
set -e
reel="$1"; stimmung="$2"; cd "$(dirname "$0")/.."
musik=$(ls musik/${stimmung}_*.mp3 | head -1)
dauer=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$reel")
aus=$(python3 -c "print(max(0,$dauer-1.5))")
tmp="${reel%.mp4}.tmp.mp4"
ffmpeg -y -loglevel error -i "$reel" -ss 45 -i "$musik" -map 0:v -map 1:a -c:v copy \
  -af "loudnorm=I=-20:TP=-2:LRA=7,afade=t=in:d=0.5,afade=t=out:st=$aus:d=1.5" \
  -c:a aac -b:a 160k -shortest -movflags +faststart "$tmp"
mv "$tmp" "$reel"; echo "Musik ($stimmung) unter $reel gelegt"
