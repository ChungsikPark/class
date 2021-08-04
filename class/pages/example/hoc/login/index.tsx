import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useContext } from "react";
import { GlobalContext } from "../../../_app";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const INPUTS_INIT = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const router = useRouter();
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const { setAccessToken } = useContext(GlobalContext);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: { email: inputs.email, password: inputs.password },
      });
      setAccessToken(`${result.data?.loginUser.accessToken}`);
      router.push("/example/hoc/main");
      alert(result.data?.loginUser.accessToken);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <input type="text" name="email" onChange={onChangeInput} />
      <input type="password" name="password" onChange={onChangeInput} />
      <button onClick={onClickLogin}>Login Page</button>
    </>
  );
}
