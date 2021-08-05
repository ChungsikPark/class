import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import FormUI from "./Form.presenter";
import { Modal } from "antd";
import { LOGIN_USER } from "./From.queries";
import { schema } from "./Form.validation.ts";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  const onSubmit = (data) => {
    try {
      const result = loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      Modal.info({ content: "로그인 완료!!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <FormUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}
