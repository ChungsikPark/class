import withAuth from "../../../../src/components/commons/example/hoc/withAuth";

function MainPage() {
  const onClickButton = (num: number) => () => {
    console.log(num);
  };

  // const onClickButton = (num: number) => {
  //   return function () {
  //     console.log(num);
  //   };
  // };

  return (
    <>
      <div>Main Page</div>
      <button onClick={onClickButton(123)}>Button</button>
    </>
  );
}

export default withAuth(MainPage);
