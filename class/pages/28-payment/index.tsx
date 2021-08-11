import { useState } from "react";
import Head from "next/head";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

export default function PaymentPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onClickPayment = () => {
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 회사마다 스타일이 있다. 단순하게 카운트하면 경쟁사나 소비자가 유추 가능
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "/28-payment-success", // 모바일 웹 환경에서 연동하기
      },
      async (rsp) => {
        if (rsp.success) {
          // 결제 성공 시 로직,
          await createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          alert("결제 성공");
          router.push("/28-payment-success");
        } else {
          // 결제 실패 시 로직,
          alert("결제 실패");
        }
      }
    );
  };

  const onChangeAmount = (event) => {
    setAmount(event?.target.value);
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
      결제금액: <input type="text" onChange={onChangeAmount} />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
