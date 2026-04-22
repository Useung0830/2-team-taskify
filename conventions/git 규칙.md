---
tags:
created: 2026 4월 22 11:00:49 오전
updated: 2026 4월 22 11:26:28 오전
---

# git 규칙

## commit message

[https://github.com/gyoogle/tech-interview-for-developer/blob/master/ETC/Git Commit Message Convention.md](https://github.com/gyoogle/tech-interview-for-developer/blob/master/ETC/Git%20Commit%20Message%20Convention.md)

### 커밋 머릿말

| 태그       | 설명                                                       |
|------------|------------------------------------------------------------|
| `feat`     | 새로운 기능 추가                                           |
| `fix`      | 버그 수정                                                  |
| `docs`     | 문서 내용 변경                                             |
| `style`    | 포맷팅, 세미콜론 누락 등 코드 동작에 영향 없는 변경        |
| `refactor` | 코드 리팩토링                                              |
| `test`     | 테스트 코드 작성                                           |
| `chore`    | 빌드 수정, 패키지 설정 등 운영 코드 변경이 없는 작업       |

## PR Rule

- PR 제목은 `Type (Scope): Summary of changes`
- PR 안에 상세 내용을 작성해야 한다.

## 머지 전략

- `feature` -> `dev`: Merge Commit
- `dev` -> `main`: Squash and Merge

## 브랜치 전략

### Main Branch

- 출시 가능한 프로덕션 코드를 모아두는 브랜치

### Develop Branch

- 다음 버전 개발을 위한 코드를 모아두는 브랜치 > 개발이 완료되면, **`Main`** 으로 머지

### Feature Branch

- 기능별로 브런치 생성 후 `dev` 브랜치로 머지
- 네이밍 : `type/지라의 이슈넘버/feature`

## 코드 리뷰

- 작성자 이외 3명의 리뷰를 승인받아야 통과 가능
