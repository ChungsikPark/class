import Button01 from "../../commons/buttons/Button01";
import Input01 from "../../commons/inputs/Input01";

export default function FormUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>폼 화면</div>
      <Input01
        inputName="이메일"
        type="text"
        register={{ ...props.register("email") }}
        errorMessage={props.errors.email?.message}
      />
      <Input01
        inputName="비밀번호"
        type="pasword"
        register={{ ...props.register("password") }}
        errorMessage={props.errors.password?.message}
      />
      <Button01
        buttonName="로그인하기"
        type="submit"
        isActive={props.isActive}
      />
    </form>
  );
}
