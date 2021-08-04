import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import withAuth from "../../src/components/commons/hocs/withAuth";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUSer] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickSignUp = async () => {
    try {
      await createUSer({
        variables: {
          createUserInput: {
            email: email,
            password: password,
            name: name,
          },
        },
      });
      alert("회원가입완료!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      이메일: <input onChange={onChangeEmail} type="text" />
      비밀번호: <input onChange={onChangePassword} type="text" />
      이름: <input onChange={onChangeName} type="text" />
      <button onClick={onClickSignUp}>SIGN UP</button>
    </>
  );
}

export default withAuth(SignUpPage);
