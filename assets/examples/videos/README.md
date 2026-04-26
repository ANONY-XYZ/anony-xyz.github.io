# Video Samples

This folder contains 4 sample video folders for the Results section, organized by different model ablation versions.

## Structure

```
sample/
├── sample1/
│   ├── ours.mp4      # Full D²Stream model
│   ├── onlyS.mp4     # Only Spatial (ISR) stream
│   └── onlyT.mp4     # Only Temporal (ITC) stream
├── sample2/
│   ├── ours.mp4
│   ├── onlyS.mp4
│   └── onlyT.mp4
├── sample3/
│   ├── ours.mp4
│   ├── onlyS.mp4
│   └── onlyT.mp4
└── sample4/
    ├── ours.mp4
    ├── onlyS.mp4
    └── onlyT.mp4
```

## Model Versions

- **ours.mp4**: Full D²Stream model with both ITC and ISR streams
- **onlyT.mp4**: Ablation with only ITC (Intra-speaker Temporal Continuity) stream
- **onlyS.mp4**: Ablation with only ISR (Inter-personal Social Relation) stream

## Sample Categories

- **Sample 1**: Blurred or Missing Facial Visual Information
- **Sample 2**: Sudden Viewpoint Transition
- **Sample 3**: Multi-source Environmental Interference
- **Sample 4**: Competitive Interference Between Short Responses and Long Monologues

The webpage dynamically loads these videos from:
- `assets/examples/videos/sample/sample{1-4}/ours.mp4` (Full model)
- `assets/examples/videos/sample/sample{1-4}/onlyT.mp4` (Only ITC)
- `assets/examples/videos/sample/sample{1-4}/onlyS.mp4` (Only ISR)