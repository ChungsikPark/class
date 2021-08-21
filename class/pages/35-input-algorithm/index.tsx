import { useState } from "react";

export default function InputAlgorithm() {
  const [value, setValue] = useState("");

  const onChangeInput = (event: any) => {
    const dottedValue: any[] = [];
    const nextValue = event.target.value;
    if (nextValue.length > value.length) {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (index + 1 === 4 || index + 1 === 6) dottedValue.push(".");
      });
      setValue(dottedValue.join(""));
    } else {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (nextPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
          dottedValue.push(".");
        } else if (nextPureValue.length > 4 && index + 1 === 4) {
          dottedValue.push(".");
        }
      });
      setValue(dottedValue.join(""));
    }
  };

  return (
    <input
      type="text"
      value={value}
      placeholder="YYYY.MM.DD"
      onChange={onChangeInput}
      maxLength={10}
    />
  );
}
