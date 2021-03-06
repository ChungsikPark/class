- ### Question

  **문제 설명**

  카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
  갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

  <br/>

  1. 다트 게임은 총 3번의 기회로 구성된다.
  2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
  3. 점수와 함께 Single(`S`), Double(`D`), Triple(`T`) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수^1 , 점수^2 , 점수^3 )으로 계산된다.
  4. 옵션으로 스타상(`*`) , 아차상(`#`)이 존재하며 스타상(`*`) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(`#`) 당첨 시 해당 점수는 마이너스된다.
  5. 스타상(`*`)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(`*`)의 점수만 2배가 된다. (예제 4번 참고)
  6. 스타상(`*`)의 효과는 다른 스타상(`*`)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(`*`) 점수는 4배가 된다. (예제 4번 참고)
  7. 스타상(`*`)의 효과는 아차상(`#`)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(`#`)의 점수는 -2배가 된다. (예제 5번 참고)
  8. Single(`S`), Double(`D`), Triple(`T`)은 점수마다 하나씩 존재한다.
  9. 스타상(`*`), 아차상(`#`)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

  <br/>

  0~10의 정수와 문자 `S`, `D`, `T`, `*`, `#`로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

  <br/>

  **제한 조건**

  "점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
  입력 예 `1S2D\*3T`

  - 점수는 0에서 10 사이의 정수이다.
  - 보너스는 S, D, T 중 하나이다.
  - 옵선은 `*`이나 `#` 중 하나이며, 없을 수도 있다.

  3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
  출력 예 `37`

  <br/>

  **입출력 예**

  ```jsx
  Input: dartResult = `1S2D*3T`;
  Output: 37;
  Description:
    1^{1} * 2 + 2^{2} * 2 + 3^{3}
  ```

  ```jsx
  Input: dartResult = `1D2S#10S`;
  Output: 9;
  Description:
    1^{2} + 2^{1} * (-1) + 10^{1}
  ```

  ```jsx
  Input: dartResult = `1D2S0T`;
  Output: 3;
  Description: 1^{2} + 2^{1} + 0^{3};
  ```

  ```jsx
  Input: dartResult = `1S*2T*3S`;
  Output: 23;
  Description:
    1^{1} * 2 * 2 + 2^{3} * 2 + 3^{1}
  ```

  ```jsx
  Input: dartResult = `1D#2S*3S`;
  Output: 5;
  Description:
    1^{2} * (-1) * 2 + 2^{1} * 2 + 3^{1}
  ```

  ```jsx
  Input: dartResult = `1T2D3D#`;
  Output: -4;
  Description:
    1^{3} + 2^{2} + 3^{2} * (-1)
  ```

  ```jsx
  Input: dartResult = `1D2S3T*`;
  Output: 59;
  Description:
    1^{2} + 2^{1} * 2 + 3^{3} * 2
  ```

---

- ### My Code

  - Solution

    ```jsx
    const bonus = ["S", "D", "T"];
    const option = ["*", "#"];

    const solution = (dartResult) => {
      const scoreList = [];
      let scoreStr = "";
      dartResult.split("").forEach((el, i) => {
        if (Number.isNaN(Number(el)) === false) {
          scoreStr += el;
        } else if (bonus.includes(el) === true) {
          scoreList.push({
            score: Number(scoreStr),
            bonus: el,
          });
          scoreStr = "";
        } else if (option.includes(el) === true) {
          scoreList[scoreList.length - 1]["option"] = el;
        }
      });
      const scoreResult = [];
      scoreList.forEach((el, i) => {
        let sum = 0;
        if (el.bonus === "S") sum += el.score;
        if (el.bonus === "D") sum += Math.pow(el.score, 2);
        if (el.bonus === "T") sum += Math.pow(el.score, 3);
        if (el.option) {
          if (el.option === "#") sum *= -1;
          if (el.option === "*") {
            sum *= 2;
            if (i > 0) scoreResult[i - 1] *= 2;
          }
        }
        scoreResult.push(sum);
      });
      return scoreResult.reduce((el, cu) => el + cu);
    };
    ```

- ### Reference Code

  - Solution

    ```jsx
    const bonus = ["S", "D", "T"];
    const option = ["*", "#"];

    const solution = (dartResult) => {
      let answer = 0;
      const scoreList = [];
      let scoreStr = "";
      for (let i = 0; i < dartResult.length; i++) {
        if (Number.isNaN(Number(dartResult[i])) === false) {
          scoreStr += dartResult[i];
        } else if (bonus.includes(dartResult[i]) === true) {
          scoreList.push({
            score: Number(scoreStr),
            bonus: dartResult[i],
          });
          scoreStr = "";
        } else if (option.includes(dartResult[i]) === true) {
          scoreList[scoreList.length - 1]["option"] = dartResult[i];
        }
      }
      const scoreResult = [];
      for (let i = 0; i < scoreList.length; i++) {
        let sum = 0;
        if (scoreList[i].bonus === "S") {
          sum += scoreList[i].score;
        } else if (scoreList[i].bonus === "D") {
          sum += Math.pow(scoreList[i].score, 2);
        } else if (scoreList[i].bonus === "T") {
          sum += Math.pow(scoreList[i].score, 3);
        }
        if (scoreList[i].option) {
          if (scoreList[i].option === "#") {
            sum *= -1;
          } else if (scoreList[i].option === "*") {
            sum *= 2;
            if (scoreResult.length > 0) {
              scoreResult[scoreResult.length - 1] *= 2;
            }
          }
        }
        scoreResult.push(sum);
      }
      return scoreResult.reduce((el, cu) => el + cu);
    };
    ```
