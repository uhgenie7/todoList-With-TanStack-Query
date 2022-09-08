# TodoList with TanStack Query
<img src="https://user-images.githubusercontent.com/72803184/185449755-24306942-5aef-4241-a76b-ae7a9cc9c0c3.gif"/>
<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-323330?style=flat-square&logo=TypeScript&logoColor=#3178C6" height="24" />
  <img src="https://img.shields.io/badge/React Query-323330?style=flat-square&logo=React Query&logoColor=#FF4154" height="24" />
  <img src="https://img.shields.io/badge/NextJS-323330?style=flat-square&logo=Next.js&logoColor=#000000" height="24" />
  <img src="https://img.shields.io/badge/styledComponents-323330?style=flat-square&logo=styled-components&logoColor=#DB7093" height="24" />
</p>

## 기능 설명
### /auth 
![image](https://user-images.githubusercontent.com/72803184/185451540-85ae6d47-6596-489d-92c1-09ae4ba94926.png)

- 로그인 폼  
  - 이메일, 비밀번호 유효성 체크
  - 조건 만족 시, 로그인 버튼 활성화
- 회원가입 버튼
- 로그인 버튼: 로그인 API 호출
  - 응답으로 받은 토큰은 로컬 스토리지에 저장
  - 로그인 여부는 redux가 전역 상태 관리
  - 다음 번 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트
  - 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트
### /auth/signup  
![image](https://user-images.githubusercontent.com/72803184/185451698-a9cb864c-56ed-4f04-ae1d-b0ab7fb13d13.png)

- 회원가입 폼  
  - 로그인 폼과 같은 컴포넌트를 사용

### /
![image](https://user-images.githubusercontent.com/72803184/185453289-f42b2503-250d-440a-971b-8b95ce02270a.png)
![image](https://user-images.githubusercontent.com/72803184/185453229-e56a6581-ed7e-4f41-a769-df731ccfc231.png)


- Todo Create 폼
  - Todo 추가 버튼을 클릭하면 할 일 추가.
  - Todo Title Input 에서 엔터를 치면 Todo Content로 포커스 이동
  - Todo Content Input 에서 엔터를 치면 추가를 클릭한 효과
  - Todo Create 폼이 비워져 있다면 사용자에게 알림

- TodoList 표출
  - 등록된 Todo가 없다면 '할일을 추가해주세요' 문구 표출
  - Todo 수정 버튼을 클릭하면 수정 모드가 활성화, 수정 내용을 제출하거나 취소 가능.
  - Todo 삭제 버튼을 클릭하면 해당 Todo 삭제 가능.
- 새로고침을 했을 때 상태 유지.

### /[todoID]
![image](https://user-images.githubusercontent.com/72803184/185453845-2595a7d5-5397-45f9-9433-0636b8d11887.png)

- 화면 내에서 Todo List와 개별 Todo의 상세를 확인 가능
- 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회 가능.



## 위키페이지
[wiki](https://github.com/uhj1993/wanted-pre-onboarding-challenge-fe-1/wiki)

## Getting Started

0. 클론 설치
```bash
~/workspace > git clone https://github.com/uhj1993/wanted-pre-onboarding-challenge-fe-1.git
```

1. 클라이언트

```bash
~/workspace > cd wanted-pre-onboarding-challenge-fe-1/client/
~/workspace/wanted-pre-onboarding-challenge-fe-1/client > yarn && yarn build && yarn start
```

2. 서버

```bash 
~/workspace/wanted-pre-onboarding-challenge-fe-1 > cd server
~/workspace/wanted-pre-onboarding-challenge-fe-1/server > yarn && yarn start # http://localhost:8080
```

3. 접속
```
http://localhost:3000/auth
```
