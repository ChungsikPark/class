import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, ChangeEvent, useState } from "react";

import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SignInPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserArgs
  >(LOGIN_USER_EXAMPLE);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUserExample({
        variables: {
          email: email,
          password: password,
        },
      });
      setAccessToken(result.data?.loginUserExample.accessToken || "");
      localStorage.setItem("refreshToken", "true");
      router.push("/22-signin-success");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      이메일: <input onChange={onChangeEmail} type="text" />
      <br />
      비밀번호: <input onChange={onChangePassword} type="text" />
      <br />
      <button onClick={onClickLogin}>SIGN IN</button>
    </>
  );
}
