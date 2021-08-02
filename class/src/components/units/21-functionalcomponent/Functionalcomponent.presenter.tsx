interface IProps {
  count: number;
  school: string;
}

export default function FunctionalcomponentUI(aaa: IProps) {
  return (
    <>
      <div>Functionalcomponent.</div>
      <div>{aaa.count}</div>
      <div>{aaa.school}</div>
    </>
  );
}
