import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../_app";

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

export default function Quiz6MainPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeInput = (event) => {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
  };

  const onClickSignIn = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      alert(`${result.data?.loginUser.accessToken}`);
      setAccessToken(result.data?.loginUser.accessToken || "");
      router.push("/quiz06/boards");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <input onChange={onChangeInput} />
      <input onChange={onChangeInput} />
      <button onClick={onClickSignIn}>로그인</button>
    </>
  );
}
