/* ===========================
   Video Samples Script
   =========================== */

const videoSamples = [
    {
        id: "sample1",
        title: "Video Sample 1",
        description: "Blurred or Missing Facial Visual Information"
    },
    {
        id: "sample2",
        title: "Video Sample 2",
        description: "Sudden Viewpoint Transition"
    },
    {
        id: "sample3",
        title: "Video Sample 3",
        description: "Multi-source Environmental Interference"
    },
    {
        id: "sample4",
        title: "Video Sample 4",
        description: "Competitive Interference Between Short Responses and Long Monologues"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initPaperButtonNotice();
    initVideoSamples();
});

let paperNoticeTimer = null;

function initPaperButtonNotice() {
    const paperButton = document.getElementById("paper-button");

    if (!paperButton) return;

    paperButton.addEventListener("click", (event) => {
        event.preventDefault();
        showTopNotice("This paper is currently under double-blind review and will be released after the review process.");
    });
}

function showTopNotice(message) {
    let container = document.getElementById("notice-container");

    if (!container) {
        container = document.createElement("div");
        container.id = "notice-container";
        container.className = "notice-container";
        document.body.appendChild(container);
    }

    let toast = container.querySelector(".notice-toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.className = "notice-toast";
        container.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("is-visible");

    if (paperNoticeTimer) {
        clearTimeout(paperNoticeTimer);
    }

    paperNoticeTimer = setTimeout(() => {
        toast.classList.remove("is-visible");
        paperNoticeTimer = null;
    }, 2600);
}

function initVideoSamples() {
    const galleries = [
        { id: "results-gallery-full", modelName: "Full", videoFile: "ours.mp4" },
        { id: "results-gallery-only-itc", modelName: "Only_ITC", videoFile: "onlyT.mp4" },
        { id: "results-gallery-only-isr", modelName: "Only_ISR", videoFile: "onlyS.mp4" }
    ];

    galleries.forEach((galleryConfig) => {
        const gallery = document.getElementById(galleryConfig.id);

        if (!gallery) return;

        videoSamples.forEach((item) => {
            const card = createVideoCard(item, galleryConfig);
            gallery.appendChild(card);
        });
    });
}

function createVideoCard(video, galleryConfig) {
    const card = document.createElement("div");
    card.className = "video-card";

    // Construct video path: assets/examples/videos/sample/{sampleId}/{videoFile}
    const videoSrc = `assets/examples/videos/sample/${video.id}/${galleryConfig.videoFile}`;

    card.innerHTML = `
        <div class="video-wrapper">
            <div class="video-label">${galleryConfig.modelName} | ${video.title}</div>
            <video class="sample-video" controls preload="metadata" playsinline>
                <source src="${videoSrc}" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
        </div>
        <div class="video-category-row" aria-label="Video category">
            <span class="video-category-label">Category</span>
            <span class="video-category-tag">${video.description || "To be updated"}</span>
        </div>
    `;

    const source = card.querySelector("source");
    const videoEl = card.querySelector("video");

    if (source && videoEl) {
        source.addEventListener("error", () => {
            card.classList.add("video-missing");
        });

        videoEl.addEventListener("error", () => {
            card.classList.add("video-missing");
        });
    }

    return card;
}
