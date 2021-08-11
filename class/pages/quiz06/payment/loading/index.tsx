import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

const PaymentLoadingPage = () => {
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onClickCharge = () => {
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: `ID${String(parseInt(Math.random() * 10000))}`,
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      async (rsp) => {
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          alert("결제 성공");
        } else {
          alert("결제 실패");
        }
      }
    );
  };

  const onChangeSelect = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      <label htmlFor="price_select"></label>
      <select name="price" id="price_select" onChange={onChangeSelect}>
        <option defaultValue="선택" selected disabled>
          선택
        </option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="1500">1500원</option>
        <option value="2000">2000원</option>
      </select>
      <button onClick={onClickCharge}>Charge</button>
    </>
  );
};

export default PaymentLoadingPage;
