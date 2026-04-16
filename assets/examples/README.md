# Results Gallery Assets

Place your example images here following this structure:

```
examples/
├── 0001/
│   ├── original.jpg    # Original input image
│   └── result.jpg      # I2E edited result
├── 0002/
│   ├── original.jpg
│   └── result.jpg
├── 0003/
│   ├── original.jpg
│   └── result.jpg
└── ...
```

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended max width 1200px for web performance
- **Aspect ratio**: Any (will be handled responsively)
- **Naming**: Keep consistent with IDs in `resultsData` array in `script.js`

## Adding Examples

1. Create a new folder with a unique ID (e.g., `0004/`)
2. Add `original.jpg` and `result.jpg` to that folder
3. Update the `resultsData` array in `script.js`:

```javascript
{
    id: "0004",
    original: "assets/examples/0004/original.jpg",
    prompt: "Your editing instruction here",
    result: "assets/examples/0004/result.jpg"
}
```

## Missing Image Fallback

If an image file is missing, the gallery will automatically show a placeholder with the image ID. This helps you identify which assets need to be added.

