#!/bin/zsh

BASE="assets/examples/videos/sample"
SAMPLES=("sample1" "sample2" "sample3" "sample4")
VARIANTS=("ours.mp4" "onlyT.mp4" "onlyS.mp4")

for s in "${SAMPLES[@]}"; do
  for v in "${VARIANTS[@]}"; do
    SRC="${BASE}/${s}/${v}"
    TMP="${BASE}/${s}/_tmp_${v}"

    if [[ -f "$SRC" ]]; then
      echo "Converting: $SRC"
      avconvert -s "$SRC" -o "$TMP" -p Preset960x540 --replace --progress
      if [[ $? -eq 0 ]]; then
        mv "$TMP" "$SRC"
        echo "  Done: $SRC"
      else
        echo "  FAILED: $SRC"
        rm -f "$TMP"
      fi
    fi
  done
done

echo ""
echo "All done."
