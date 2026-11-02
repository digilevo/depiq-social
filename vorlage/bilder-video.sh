#!/bin/bash
# Macht aus Bildern ein Hochkant-Video 1080 × 1920 mit sanften Übergängen und Musik (für YouTube Shorts).
# Aufruf: bash vorlage/bilder-video.sh <ziel.mp4> <ruhig|heiter|inspirierend> <sekunden_je_bild> bild1.png [bild2.png …]
# Bilder kleiner als 1080 × 1920 (z. B. Karussell 1080 × 1350) werden mittig auf dunkelblauen depiq-Hintergrund gesetzt.
# Regel aus RICHTLINIEN §0 (ab 02.11.2026): mindestens 7 Sekunden je Bild, damit man den Text in Ruhe lesen kann.
# Kleinere Werte werden automatisch auf 7 Sekunden angehoben.
set -e
cd "$(dirname "$0")/.."
ziel="$1"; stimmung="$2"; s="$3"; shift 3
MIN=7; s=$(python3 -c "print(max(float('$s'), $MIN))")
n=$#; [ "$n" -ge 1 ] || { echo "keine Bilder"; exit 1; }
ue=0.4; args=(); filt=""; i=0
for b in "$@"; do
  args+=(-loop 1 -t "$s" -i "$b")
  filt+="[$i:v]scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=0x0a0d2c,setsar=1,fps=30,format=yuv420p[v$i];"
  i=$((i+1))
done
letzte="v0"; off=0
for ((k=1;k<n;k++)); do
  off=$(python3 -c "print(round($k*($s-$ue),2))")
  filt+="[$letzte][v$k]xfade=transition=fade:duration=$ue:offset=$off[x$k];"; letzte="x$k"
done
dauer=$(python3 -c "print(round($n*$s-($n-1)*$ue,2))")
ffmpeg -y -loglevel error "${args[@]}" -f lavfi -t "$dauer" -i anullsrc=channel_layout=stereo:sample_rate=44100 \
  -filter_complex "${filt%;}" -map "[$letzte]" -map "$n:a" -c:v libx264 -crf 20 -pix_fmt yuv420p -r 30 \
  -c:a aac -t "$dauer" -movflags +faststart "$ziel"
bash vorlage/musik.sh "$ziel" "$stimmung"
