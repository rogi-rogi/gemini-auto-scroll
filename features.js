

let activeTocObserver = null;
let pageSetupTimer = null;

/**
 * 목차를 비우고 현재 페이지의 질문들로 새로 채웁니다.
 * 질문이 없으면 emptyState 요소를 표시하고 'is-empty' 클래스를 추가합니다.
 */
function refreshToc(tocList, emptyState) {
    tocList.innerHTML = '';
    const queryElements = document.querySelectorAll(USER_QUERY);

    if (queryElements.length === 0) {
        tocList.classList.add('is-empty');
        emptyState.classList.remove('is-empty');
    } else {
        tocList.classList.remove('is-empty');
        emptyState.classList.add('is-empty');
        queryElements.forEach(queryElement => {
            const pTag = queryElement.querySelector('p');
            if (!pTag) return;
            const tocText = pTag.textContent.trim();
            if (!tocText) return;

            const listItem = document.createElement('li');
            listItem.textContent = tocText;
            listItem.title = tocText;
            listItem.addEventListener('click', () => {
                queryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            tocList.appendChild(listItem);
        });
    }
}


function setupFeaturesForPage(uiElements) {

    const trySetup = () => {
        const container = document.querySelector(CHAT_CONTAINER_SELECTOR);
        const history = document.querySelector(CHAT_HISTORY_SELECTOR);

        if (!container || !history) {
            pageSetupTimer = setTimeout(trySetup, 500);
            return;
        }

        let lastScrollTop = history.scrollTop;
        container.onscroll = () => { lastScrollTop = history.scrollTop; };

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                container.scrollTop = lastScrollTop;
                }, 500);
        });

        uiElements.scrollToBottomBtn.onclick = () => {
            history.scrollTop = history.scrollHeight;
        };

        refreshToc(uiElements.tocList, uiElements.emptyState);

        let debounceTimer;
        activeTocObserver = new MutationObserver(() => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(
                () => refreshToc(uiElements.tocList, uiElements.emptyState)
                , 300);
        });

        activeTocObserver.observe(history, { childList: true, subtree: true });
    };

    trySetup();
}

function initializeFeatures(uiElements) {
    setupFeaturesForPage(uiElements);
}
