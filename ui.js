function createUI() {
    const container = document.createElement('div');
    container.id = 'gemini-auto-scroll-container';

    const fab = document.createElement('div');
    fab.className = 'fab';
    // 아이콘을 더 직관적인 '목록' 아이콘으로 변경
    fab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;

    const expandedContent = document.createElement('div');
    expandedContent.className = 'expanded-content';

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list is-empty'; // 채팅 내역을 불러오기 전에 emptyState를 보여줌

    const emptyState = document.createElement('div');
    emptyState.className = 'toc-empty-state';
    emptyState.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="68px" viewBox="0 0 24 24" width="68px" fill="#BDC1C6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>`;

    const scrollToBottomBtn = document.createElement('button');
    scrollToBottomBtn.className = 'scroll-bottom-btn';
    scrollToBottomBtn.textContent = 'Scroll to Bottom';

    expandedContent.appendChild(emptyState)
    expandedContent.appendChild(tocList);
    expandedContent.appendChild(scrollToBottomBtn);
    container.appendChild(fab);
    container.appendChild(expandedContent);

    return {
        container,
        tocList,
        scrollToBottomBtn,
        emptyState
    };
}
