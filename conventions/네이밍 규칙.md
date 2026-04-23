---
tags:
  - convention-todo
created: 2026 4월 22 10:21:51 오전
updated: 2026 4월 22 3:18:06 오후
---

# 네이밍 규칙

## 폴더 이름

- 모두 소문자 사용
  - `components`
  - `utils`
  - `hooks`
  - …
- kebab-case 사용
  - `input-wrapper`
  - …
- 예외적으로 약속된 이름은 그대로 두기
  - [[#컴포넌트]]
    - PascalCase
  - `node_modules`
  - `ISSUE_TEMPLATE`
  - …

## 컴포넌트

### 파일 이름

- PascalCase 사용
  - `ModalHeader`
  - `ProfileIcon`
  - …

### 함수 이름

- PascalCase 사용
  - `ModalHeader`
  - `ProfileIcon`
  - …

## 나머지 파일 이름

- kebab-case
  - 이쪽으로

## 일반 함수, 변수, props 이름

- camelCase 사용
- 불리언 값 변수 이름에는 "is" 접두사 사용
  - ex: `isDisabled`, `isActive`, `isHovered`
- 이벤트 함수
  - 정의 시에는 `handle`로 시작
  - props로 넘겨줄 때는 `on`으로 시작

---

## 아이콘 이름

- kebab-case 사용
- **파일명 시작의 접두사를 정해야 함**
  - `ic-` 접두사 사용
- 확장자: svg

## 이미지

- `img-` 접두사
- png 사용

---

## 상수 이름

- SCREAMING_SNAKE_CASE
  - `DEFAULT_PAGE_SIZE`
  - …

### 상수 값 집합 관리

- as const로 사용

```typescript
const COLOR = {
  red: 0,
  blue: 1,
  green: 2,
} as const;
```

## 커스텀 훅 이름

- file 이름과 function 이름 모두 use + camelCase
  - `useUser`, `useAuthState`, `useInput`

## type 이름

- kebab-case
  - `user-info.ts`

## API 함수

- 비즈니스 로직 함수 이름: 동사‑명사 조합 + `camelCase`
  - `getCurrentUser`, `postOrder`,  `updateUserProfile`, `deletePost` 등
- file 이름: `kebab-case`
- 폴더 구조
  - `apis/user.ts`
- `fetch` / `axios`
  - `fetch` 사용

## 개인적 의견

- 디렉토리 및 파일 이름은 파일 시스템의 대소문자 이슈를 해결하기 위해 kebab-case로 통일을 권장
