import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";

const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요한 페이지 입니다.");
      router.push("/example/hoc/login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
