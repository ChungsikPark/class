import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
// 코드젠으로 생성한 graphql api의 타입을 가져올 때 사용
export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: IQuery;
}

export interface INewInputs {
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  isEdit?: boolean;
  btnActive: boolean;
  data: any;
}

// 함수 타입의 인자를 적는 것은 실제 사용된 함수에서 인자로 받아서 쓰고 있으면 적어주고,
// 따로 정해진 인자 없이 쓰여지는 함수는 () => void로 생략해서 사용가능
