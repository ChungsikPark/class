#### [Playground](http://example.codebootcamp.co.kr/graphql) <-- 연습하기 링크

> 1. 철수의 나이는 몇살인가요?(나이만 조회해 주세요.)

#### Input

```js
query {
fetchProfile(name: "철수") {
  age
  }
}
```

#### Output

```js
{
  "data": {
    "fetchProfile": {
      "age": 20
    }
  }
}
```

> 2. 영희의 학교는 어디인가요?(학교만 조회해 주세요.)

#### Input

```js
query {
fetchProfile(name: "영희") {
  age
  }
}
```

#### Output

```js
{
  "data": {
    "fetchProfile": {
      "school": "다람쥐초등학교"
    }
  }
}
```

> 3. 3번 게시글의 내용과 작성일이 무엇인가요?(내용과 작성일만 조회해 주세요.)

#### Input

```js
query {
  fetchBoard(number: 3) {
    contents
    createdAt
  }
}
```

#### Output

```js
{
  "data": {
    "fetchBoard": {
      "contents": "냉무",
      "createdAt": "2021-07-07T05:23:28.118Z"
    }
  }
}
```

> 4. 본인의 이름으로 프로필을 작성해 보세요.

#### Input

```js
mutation {
  createProfile(name: "Chungsik", age: 20, school: "KAIST"){
    message
  }
}
```

#### Output

```js
{
  "data": {
    "createProfile": {
      "message": "프로필이 정상적으로 등록되었습니다."
    }
  }
}
```

> 5. 본인의 이름으로 게시글을 작성해 보세요.

#### Input

```js
mutation {
  createBoard(
    writer: "Chungsik"
    password: "1234"
    title: "This is a title."
    contents: "These are contents."
  ) {
    message
    number
  }
}
```

#### Output

```js
{
  "data": {
    "createBoard": {
      "message": "게시물이 정상적으로 등록되었습니다.",
      "number": 71
    }
  }
}
```

> 6. 자신의 프로필을 조회해 보세요.

#### Input

```js
query {
  fetchProfile(name: "Chungsik"){
    # number
    name
    age
    school
  }
}
```

#### Output

```js
{
  "data": {
    "fetchProfile": {
      "name": "Chungsik",
      "age": 20,
      "school": "KAIST"
    }
  }
}
```

> 7. 자신의 게시글을 조회해 보세요.

#### Input

```js
query {
  fetchBoard(number: 71){
    number
    writer
    title
    contents
    like
    createdAt
  }
}
```

#### Output

```js
{
  "data": {
    "fetchBoard": {
      "number": 71,
      "writer": "Chungsik",
      "title": "This is a title.",
      "contents": "These are contents.",
      "like": 0,
      "createdAt": "2021-07-07T08:41:27.584Z"
    }
  }
}
```

> 8. 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.

#### Input

```js
mutation {
  updateProfile(name: "Chungsik", age: 20, school: "POSTECH"){
    # _id
    # number
    message
  }
}
```

#### Output

```js
{
  "data": {
    "updateProfile": {
      "_id": null,
      "number": null,
      "message": "프로필이 정상적으로 수정되었습니다."
    }
  }
}
```

> 9. 본인의 게시글에서, 제목과 내용을 바꿔보세요.

#### Input

```js
mutation {
  updateBoard(
    number: 71
    writer: "Chungsik"
    # password: "1234"
    title: "This is an edited title."
    contents: "These are modified contents."
  ) {
    # _id
    # number
    message
  }
}
```

#### Output

```js
{
  "data": {
    "updateBoard": {
      "message": "게시물이 정상적으로 수정되었습니다."
    }
  }
}
```

> 10. 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요.

#### Input

```js
mutation {
  createProfile(name: "Pororo", age: 19, school: "EBS") {
    message
  }
}
```

#### Output

```js
{
  "data": {
    "createProfile": {
      "message": "프로필이 정상적으로 등록되었습니다."
    }
  }
}
```

> 11. 위 10번에서 작성한 프로필을 삭제해 보세요.

#### Input

```js
mutation {
  deleteProfile(name: "Pororo") {
    message
  }
}
```

#### Output

```js
{
  "data": {
    "deleteProfile": {
      "message": "프로필이 정상적으로 삭제되었습니다."
    }
  }
}
```

> 12. 상품을 하나 만들어 보세요.

#### Input

```js
mutation {
  createProduct(
    seller: "Chungsik"
    createProductInput: {
      name: "Nike Jordan 1"
      detail: "Nike X Dior Collaboration Model"
      price: 600
    }
  ) {
    _id
    message
  }
}
```

#### Output

```js
{
  "data": {
    "createProduct": {
      "_id": "f8f63f1b-39d1-477c-950f-8ce32a3bc8c4",
      "message": "상품이 정상적으로 등록되었습니다."
    }
  }
}
```

> 13. 위 12번에서 만들었던 상품의 가격을 500원 인상해 보세요.

#### Input

```js
mutation {
  updateProduct(
    productId: "f8f63f1b-39d1-477c-950f-8ce32a3bc8c4"
    updateProductInput: {
      name: "Nike Jordan 1"
      detail: "Nike X Dior Collaboration Model"
      price: 1100
    }
  ) {
    message
  }
}
```

#### Output

```js
{
  "data": {
    "updateProduct": {
      "message": "상품이 정상적으로 수정되었습니다."
    }
  }
}
```

> 14. 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.

#### Input

```js
query {
  fetchProduct(productId: "f8f63f1b-39d1-477c-950f-8ce32a3bc8c4") {
    price
  }
}
```

#### Output

```js
{
  "data": {
    "fetchProduct": {
      "price": 1100
    }
  }
}
```

> 15. 조회했던 상품을 삭제해 보세요.

#### Input

```js
mutation {
  deleteProduct(productId: "f8f63f1b-39d1-477c-950f-8ce32a3bc8c4") {
    message
  }
}
```

#### Output

```js
{
  "data": {
    "deleteProduct": {
      "message": "상품이 정상적으로 삭제되었습니다."
    }
  }
}
```

> 16. 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.

#### Input

```js
query {
  fetchProduct(productId: "f8f63f1b-39d1-477c-950f-8ce32a3bc8c4") {
    name
    detail
    price
  }
}
```

#### Output

```js
{
  "data": {
    "fetchProduct": null
  }
}
```

> 17. 게시물 목록 중, 2페이지를 조회해 보세요.

#### Input

```js
query {
  fetchBoards(page: 2) {
    number
    writer
    title
    contents
  }
}
```

#### Output

```js
{
  "data": {
    "fetchBoards": [
      {
        "number": 17,
        "writer": "맹구",
        "title": "가끔은 눈물을 참을 수 없는 내가 별루 다.",
        "contents": "히히히힣히히"
      },
      {
        "number": 16,
        "writer": "hard",
        "title": "hard",
        "contents": "hard하드"
      },
      {
        "number": 15,
        "writer": "맹구",
        "title": "API",
        "contents": "API는 어렵다."
      },
      {
        "number": 14,
        "writer": "짱구",
        "title": "나는 왜",
        "contents": "졸린가,,,"
      },
      {
        "number": 13,
        "writer": "Chungsik",
        "title": "This is a title.",
        "contents": "This is a content."
      },
      {
        "number": 12,
        "writer": "shong",
        "title": "나는 왜",
        "contents": "졸린가,,,"
      },
      {
        "number": 11,
        "writer": "코캠",
        "title": "코캠파이팅",
        "contents": "하하"
      },
      {
        "number": 10,
        "writer": "영은",
        "title": "호두자두 사랑해",
        "contents": "호두자두 일상글"
      },
      {
        "number": 9,
        "writer": "스펀지밥",
        "title": "행복합니다.",
        "contents": "잉잉"
      },
      {
        "number": 8,
        "writer": "스타벅스",
        "title": "아메리카노",
        "contents": "조아조아"
      }
    ]
  }
}
```

> 18. 게시물 목록을 조회할 때, page를 입력하지 않으면, 어떤 결과가 발생하나요?

#### Input

```js
query {
  fetchBoards {
    number
    writer
    title
    contents
  }
}
```

#### Output

```js
{
  "data": {
    "fetchBoards": [
      {
        "number": 71,
        "writer": "Chungsik",
        "title": "This is an edited title.",
        "contents": "These are modified contents."
      },
      {
        "number": 70,
        "writer": "Chungsik",
        "title": "This is a title.",
        "contents": "These are contents."
      },
      {
        "number": 69,
        "writer": "Chungsik",
        "title": "This is a title.",
        "contents": "These are contents."
      },
      {
        "number": 68,
        "writer": "Chungsik",
        "title": "This is a title.",
        "contents": "These are contents."
      },
      {
        "number": 67,
        "writer": "Chungsik",
        "title": "This is a title.",
        "contents": "These are contents."
      },
      {
        "number": 66,
        "writer": "Chungsik",
        "title": "This is a title.",
        "contents": "These are contents."
      },
      {
        "number": 65,
        "writer": "junku",
        "title": "노가다",
        "contents": "코드도 잘 모르겠다."
      },
      {
        "number": 64,
        "writer": "재훈",
        "title": "제목2",
        "contents": "수정"
      },
      {
        "number": 58,
        "writer": "철수",
        "title": "제목",
        "contents": "내용입니다"
      },
      {
        "number": 18,
        "writer": "유리",
        "title": "훈이사랑",
        "contents": "짱구도사랑"
      }
    ]
  }
}
```

- default 값이 존재한다. "page: 1"의 결과와 동일하게 출력된다.

> 19. 프로필이 전체 몇 개가 있는지 확인해 보세요.

#### Input

```js
query {
  fetchProfilesCount
}
```

#### Output

```js
{
  "data": {
    "fetchProfilesCount": 55
  }
}
```

> 20. 게시물은 몇 개가 있나요?

#### Input

```js
query {
  fetchBoardsCount
}
```

#### Output

```js
{
  "data": {
    "fetchBoardsCount": 27
  }
}
```
