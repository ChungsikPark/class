import FunctionalcomponentUI from "./Functionalcomponent.presenter";

export default function FunctionalComponent() {
  return (
    <>
      {/* <FunctionalcomponentUI count={123} school="다람쥐초등학교" /> */}
      {FunctionalcomponentUI({ count: 456, school: "다람쥐초등학교" })}
    </>
  );
}
