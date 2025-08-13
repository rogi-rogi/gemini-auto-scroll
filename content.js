// 창 크기 조절 이벤트가 끝난 후 한 번만 실행되도록 설정 (Debounce)
let resizeTimer;

window.addEventListener('resize', () => {
  // 기존 타이머가 있다면 취소
  clearTimeout(resizeTimer);

  // 150ms 후에 스크롤 함수 실행
  resizeTimer = setTimeout(() => {
    // Gemini의 메인 스크롤 영역을 찾습니다.
    const chatContainer = document.querySelector('#chat-history > infinite-scroller');

    if (chatContainer) {
      // 스크롤 가능한 높이만큼 스크롤을 아래로 내립니다.
      chatContainer.scrollTop = chatContainer.scrollHeight;
      console.log('Gemini Auto Scroll: 스크롤을 최하단으로 이동했습니다.');
    }
  }, 150);
});