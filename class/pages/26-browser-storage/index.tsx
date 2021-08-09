export default function BrowserStorage() {
  const onSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "bbb=훈이";
    document.cookie = "ccc=맹구";
  };
  const onSaveLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onSaveSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onLoadCookie = () => {
    // document.cookie = "aaa=철수";
    let asdf;
    document.cookie.split("; ").forEach((data) => {
      if (data.startsWith("aaa=")) asdf = data;
    });
    console.log(asdf.split("=")[1]);
  };
  const onLoadLocalStorage = () => {
    // localStorage.setItem("bbb", "영희");
    const asdf = localStorage.getItem("bbb");
    console.log("asdf", asdf);
  };
  const onLoadSessionStorage = () => {
    // sessionStorage.setItem("ccc", "훈이");
    const qwer = sessionStorage.getItem("ccc");
    console.log("qwer", qwer);
  };

  return (
    <>
      <button onClick={onSaveCookie}>쿠키에 저장</button>
      <button onClick={onSaveLocalStorage}>로컬스트리지에 저장</button>
      <button onClick={onSaveSessionStorage}>세션스토리지에 저장</button>
      ==================================================================
      <button onClick={onLoadCookie}>쿠키 불러오기</button>
      <button onClick={onLoadLocalStorage}>로컬스토리지 불러오기</button>
      <button onClick={onLoadSessionStorage}>세션스토리지 불러오기</button>
    </>
  );
}
