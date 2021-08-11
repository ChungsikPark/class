import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../_app";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const INPUTS_INIT = {
  email: "",
  password: "",
};

const PaymentLoginPage = () => {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const { setAccessToken } = useContext(GlobalContext);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: inputs.email,
        password: inputs.password,
      },
    });
    Modal.info({ content: "로그인이 완료되었습니다." });
    setAccessToken(result.data?.loginUser.accessToken || "");
    router.push("/quiz06/payment/loading");
  };
  return (
    <>
      이메일: <input name="email" type="text" onChange={onChangeInputs} />
      비밀번호:
      <input name="password" type="password" onChange={onChangeInputs} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
};

export default PaymentLoginPage;
