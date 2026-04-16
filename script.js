/* ===========================
   Video Samples Script
   =========================== */

const videoSamples = [
    {
        id: "sample-1",
        title: "Video Sample 1",
        src: "assets/examples/videos/sample-1.mp4",
        description: "Blurred or Missing Facial Visual Information"
    },
    {
        id: "sample-2",
        title: "Video Sample 2",
        src: "assets/examples/videos/sample-2.mp4",
        description: "Sudden Viewpoint Transition"
    },
    {
        id: "sample-3",
        title: "Video Sample 3",
        src: "assets/examples/videos/sample-3.mp4",
        description: "Multi-source Environmental Interference"
    },
    {
        id: "sample-4",
        title: "Video Sample 4",
        src: "assets/examples/videos/sample-4.mp4",
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
        { id: "results-gallery-full", modelName: "Full" },
        { id: "results-gallery-only-itc", modelName: "Only_ITC" },
        { id: "results-gallery-only-isr", modelName: "Only_ISR" }
    ];

    galleries.forEach((galleryConfig) => {
        const gallery = document.getElementById(galleryConfig.id);

        if (!gallery) return;

        videoSamples.forEach((item) => {
            const card = createVideoCard(item, galleryConfig.modelName);
            gallery.appendChild(card);
        });
    });
}

function createVideoCard(video, modelName) {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
        <div class="video-wrapper">
            <div class="video-label">${modelName} | ${video.title}</div>
            <video class="sample-video" controls preload="metadata">
                <source src="${video.src}" type="video/mp4">
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
