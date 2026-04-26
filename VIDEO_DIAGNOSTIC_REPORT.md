# 视频文件诊断报告

## 问题描述
网页中的视频只有声音没有画面（显示黑屏）

## 根本原因
**所有MP4文件都只包含音频轨道，缺少视频轨道**

## 检测结果

### 文件信息
所有12个视频文件（4个样本 × 3个版本）都存在相同问题：

```
assets/examples/videos/sample/sample1/ours.mp4   - 只有音频轨道
assets/examples/videos/sample/sample1/onlyT.mp4  - 只有音频轨道
assets/examples/videos/sample/sample1/onlyS.mp4  - 只有音频轨道
... (所有文件相同)
```

### 技术细节
- 文件格式：MP4 (ISO Media)
- 轨道数量：1（仅音频）
- 音频编码：AAC, 44100 Hz, 双声道
- 视频轨道：**缺失**
- 浏览器检测：videoWidth = 0, videoHeight = 0

## 解决方案

### 方案1：重新导出视频（推荐）
使用原始视频源文件，重新导出为包含视频轨道的MP4文件。

#### 使用FFmpeg重新编码（如果有原始文件）：
```bash
# 示例：将原始视频转换为Web兼容的MP4
ffmpeg -i input_video.avi -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k output.mp4
```

### 方案2：检查原始导出过程
检查视频导出工具的设置，确保：
- ✓ 启用视频轨道
- ✓ 选择正确的视频编解码器（H.264/AVC）
- ✓ 不要使用"仅音频"模式

### 方案3：验证源文件
确认原始视频文件确实包含视频内容：
```bash
# 使用QuickTime Player打开查看
# 或使用VLC播放器验证
```

## 推荐的视频规格
为确保最佳的Web兼容性，建议使用以下规格：

- **视频编解码器**: H.264 (AVC)
- **音频编解码器**: AAC
- **容器格式**: MP4
- **分辨率**: 640x360 或更高
- **帧率**: 24-30 fps
- **比特率**: 1-3 Mbps（视分辨率而定）

## 测试方法
重新导出后，使用以下命令验证视频包含视频轨道：

```bash
# macOS
afinfo your_video.mp4 | grep "Num Tracks"
# 应该显示 2 个轨道（1个视频 + 1个音频）

# 或者在浏览器中打开 test-video.html 检查
# videoWidth 和 videoHeight 应该大于 0
```

## 当前网页状态
网页代码本身没有问题，一旦提供正确的视频文件，将能正常播放。

---
生成时间: 2026/4/26
