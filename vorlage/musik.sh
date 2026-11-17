#!/bin/bash
# Legt Musik unter ein Video (ersetzt die stille Tonspur). Aufruf: bash vorlage/musik.sh <video.mp4> <stimmung>
# Seit 17.11.2026 (Jürgen: Lo-Fi überall, auch YouTube): immer der eigene depiq-Sound (musik/depiq-sound/hintergrund.mp3 = Lo-Fi
# plus Erkennungston) über vorlage/depiq-sound.sh. Die Stimmung (ruhig|heiter|inspirierend) wird nur noch aus Kompatibilität angenommen.
# Die Mediathek-Titel in musik/*.mp3 werden nicht mehr verwendet.
set -e
reel="$1"; cd "$(dirname "$0")/.."
tmp="${reel%.mp4}.tmp.mp4"
bash vorlage/depiq-sound.sh "$reel" "$tmp"
mv "$tmp" "$reel"; echo "depiq-Sound (Lo-Fi) unter $reel gelegt"
