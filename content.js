function isGeminiChatPage() {
    return window.location.href.startsWith(GEMINI_CHAT_URL);
}

function initializeExtension() {
    console.log('[Gemini] Initializing extension...');
    cleanupExtension();

    if (isGeminiChatPage()) {
        const uiElements = createUI();
        document.body.appendChild(uiElements.container);
        initializeFeatures(uiElements);
    }
}



function cleanupExtension() {
    const prevExtension = document.getElementById(EXTENSION_CONTAINER_ID);
    if (prevExtension) {
        console.log('[Gemini] Cleaning up old extension...');
        prevExtension.remove();
    }
}


function main() {
    setTimeout(initializeExtension, 500);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "URL_CHANGED") {
        main();
    }
});

if (window.location.href.startsWith(GEMINI_CHAT_URL)) {
    main();
}
