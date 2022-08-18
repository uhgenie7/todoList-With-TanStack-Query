# 3회차\_branch

- 3회차 브랜치입니다
- 22.8.17 ~ 22.8.20

### 과제 1) README 작성 및 코드 정리

- [ ]  최종 구현 화면 이미지 / 동영상으로 제공
    - 화면을 어떤 구조로 구성했는지에 대한 설명
    - 라우트나 기능별로 구분하여 제공하면 좋습니다 👍
- [ ]  설치, 환경설정 및 실행 방법
    - 프로젝트 실행 시 필요한 환경 세팅 확인 (script, port, env, …)
- [ ]  구현 요구 사항 목록
    - 체크 리스트 형태로 추가
- [x]  사용한 프레임워크 및 라이브러리 설명
    - package.json 참조하여 선택한 이유 작성
- [x]  폴더 구조 설명
    - 폴더를 구분한 기준에 대하여 설명
    - tree 명령어를 사용하면 간편하게 디렉토리 구조를 출력할 수 있음
- [x]  과제 진행 시 주안점 작성
    - 고민한 부분에 대하여 서술
- [x]  한계점 및 개선 사항 작성
    - 고려는 하였으나 실제 구현하지 못한 부분에 대하여 서술
- 기타 체크 사항
    - console.log, 불필요한 주석 제거
    - 구현 요구 사항에 맞게 실제 동작하는지 전수 테스트
    - 설명이 필요한 코드에는 JSDoc 어노테이션을 사용해서 설명 추가 ([참고 링크](https://typescript-kr.github.io/pages/jsdoc-reference.html))
        
        ```tsx
        /**
         * Class representing a dot.
         * @extends Point
         */
        class Dot extends Point {
            /**
             * Create a dot.
             * @param {number} x - The x value.
             * @param {number} y - The y value.
             * @param {number} width - The width of the dot, in pixels.
             */
            constructor(x, y, width) {
                // ...
            }
        
            /**
             * Get the dot's width.
             * @return {number} The dot's width, in pixels.
             */
            getWidth() {
                // ...
            }
        }
        ```
        

### 과제 2) ‘개발자로서의 나’ 특징 정의해보기

**:: 탐색해보기**

- 나는 왜 개발자를 하고 싶은가?
- 나는 개발자로서 사회 / 회사에 어떤 가치를 더해보고 싶은가?
- 나는 어떠한 장점 / 단점을 가지고 있는 ‘개발자’인가?
- 나는 어떤 상황에서 동기부여 되고, 스스로 동기부여를 찾는 편인가?
- 나는 그동안 어떤 방면 / 방식으로 노력해온 사람인가?
- …

**:: 표현해보기**

- 위에서 찾은 특성들이 `이력서 → github, 기술 블로그 → 과제 README / 인성 면접` 에서 잘 드러나고 있는지 / 드러날 수 있는지 점검해보기
- 내가 어필하고 싶은 나의 모습이 에피소드 위주로 잘 정리되었는지 점검해보기
