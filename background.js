chrome.webNavigation.onHistoryStateUpdated.addListener(
    (details) => {
        // URL이 /app/ 경로로 변경되었을 때만 메시지를 보냅니다.
        if (details.url.startsWith("https://gemini.google.com/app/")) {
            chrome.tabs.sendMessage(details.tabId, {
                type: "URL_CHANGED",
                url: details.url,
            });
        }
    },
    {
        // 감지할 URL 패턴을 지정하여 불필요한 이벤트 발생을 줄입니다.
        url: [{ hostEquals: "gemini.google.com" }],
    }
);