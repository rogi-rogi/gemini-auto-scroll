# Gemini Auto Scroll

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern_UI-blue?logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Web_Extension-orange?logo=html5&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

**Gemini Auto Scroll**은 Google Gemini 웹사이트의 사용자 경험을 향상시키기 위해 제작된 브라우저 확장 프로그램입니다. 긴 대화 내용을 쉽게 탐색할 수 있는 동적 목차(TOC) 기능과 스크롤 위치 복원 기능을 제공하여 생산성을 높여줍니다.

[크롬 웹스토어](https://chromewebstore.google.com/detail/gemini-auto-scroll/amjhknhpkgplkicfljkjdmokbddmcgoc)에서도 설치 가능합니다.


## ✨ 주요 기능

- **동적 목차 (TOC)**: 현재 채팅의 모든 사용자 질문을 기반으로 목차를 자동 생성합니다.
- **부드러운 스크롤**: 목차의 항목을 클릭하면 해당 질문 위치로 스크롤됩니다.
- **스크롤 위치 복원**: 브라우저 창 크기를 조절할 때 스크롤 위치가 초기화되는 것을 방지하고 마지막 위치를 유지합니다.
- **편의 기능**: '맨 아래로 스크롤' 버튼으로 빠르게 대화의 끝으로 이동할 수 있습니다.

## 🚀 설치 방법

이 확장 프로그램은 현재 스토어에 등록되어 있지 않으므로, 아래와 같이 수동으로 설치해야 합니다.

1.  이 저장소를 로컬 컴퓨터에 복제하거나 다운로드합니다.
2.  Chrome/Edge 브라우저에서 `chrome://extensions` 페이지를 엽니다.
3.  우측 상단의 **'개발자 모드(Developer mode)'**를 활성화합니다.
4.  **'압축 해제된 확장 프로그램을 로드합니다(Load unpacked)'** 버튼을 클릭합니다.
5.  로컬에 저장한 프로젝트 폴더를 선택합니다.
6.  이제 Gemini 웹사이트(`https://gemini.google.com/app`)에 방문하면 확장 프로그램이 활성화된 것을 확인할 수 있습니다.

## 📂 프로젝트 구조

```
gemini-auto-scroll/
│
├── manifest.json         # 확장 프로그램의 설정 및 진입점 정의
├── background.js         # URL 변경 감지 등 백그라운드 이벤트 처리
├── content.js            # 페이지에 삽입되어 기능 실행을 총괄하는 메인 컨트롤러
├── features.js           # 목차 생성, 스크롤 복원 등 핵심 기능 구현
├── ui.js                 # 플로팅 버튼, 목차 리스트 등 UI 요소 생성
├── styles.css            # UI 스타일, 애니메이션, 다크 모드 테마 정의
└── constants.js          # URL, CSS 선택자 등 주요 상수 관리
```

## 📄 라이선스

이 프로젝트는 [MIT 라이선스](https://opensource.org/licenses/MIT)를 따릅니다.
