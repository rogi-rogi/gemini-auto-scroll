# Gemini Auto Scroll

[![Chrome Extension](https://img.shields.io/badge/Chrome_Extension-v1.0-blue?logo=google-chrome&logoColor=white)](https://developer.chrome.com/docs/extensions)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black)](https://developer.mozilla.org/ko/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

> Gemini 웹사이트에서 창 크기를 조절할 때마다 스크롤이 최하단으로 자동 이동하도록 하는 간단한 크롬 확장 프로그램입니다.

<br>

## 🤔 해결하려는 문제

Google Gemini 채팅 페이지에서는 브라우저 창 크기 변경 시 스크롤 위치가 최상단으로 초기화되는 불편함이 있습니다. 긴 대화를 나누던 중 이 현상이 발생하면 사용자는 직접 스크롤을 해야하는 번거로움이 발생합니다. 이 확장 프로그램은 이 문제를 해결하여 원활한 채팅 경험을 제공합니다.


<br>

## ✨ 주요 기능

- **자동 스크롤**: Gemini 채팅 페이지에서 창 크기 변경 시 스크롤을 자동으로 최하단으로 이동시킵니다.
- **성능 최적화**: Debounce 기술을 적용하여 창 크기를 조절하는 동안 불필요한 스크롤 이벤트가 반복적으로 발생하는 것을 막고, 성능 저하를 방지합니다.
- **초경량 및 타겟팅**: 매우 가볍게 제작되었으며, 오직 Gemini 웹사이트(https://gemini.google.com/app/*)에서만 동작하여 다른 웹사이트에는 전혀 영향을 주지 않습니다.

<br>

## 🛠️ 설치 방법

이 확장 프로그램은 크롬 웹 스토어에 등록되어 있지 않으므로, 아래와 같이 수동으로 설치해야 합니다.

1. 이 프로젝트 폴더를 컴퓨터에 다운로드하거나 준비합니다.
2. 크롬 브라우저에서 주소창에 `chrome://extensions` 를 입력하여 확장 프로그램 관리 페이지로 이동합니다.
3. 페이지 오른쪽 상단의 **'개발자 모드(Developer mode)'** 스위치를 켭니다.
4. 왼쪽 상단에 나타나는 **'압축해제된 확장 프로그램을 로드합니다(Load unpacked)'** 버튼을 클릭합니다.
5. 다운로드한 이 프로젝트 폴더(`gemini-auto-scroll`)를 선택합니다.
6. 설치가 완료되었습니다! 이제 Gemini 페이지에서 기능이 자동으로 활성화됩니다.

<br>

## 📂 파일 구조
```bash
├── manifest.json       # 확장 프로그램의 설정과 권한을 정의하는 파일
├── content.js          # 실제 자동 스크롤 로직을 담고 있는 자바스크립트 파일
├── logo.png
├── LICENSE
└── README.md
```
