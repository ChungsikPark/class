import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function DaumPostCodePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const onComplete = (data: any) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
  };
  const onChangeAddressDetail = (event: any) => {
    setAddressDetail(event.target.value);
  };
  const onClickOpenModal = () => {
    setIsOpen(true);
  };
  const onClickCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal
          visible={true}
          onOk={onClickCloseModal}
          onCancel={onClickCloseModal}
          title="주소검색하기"
        >
          <DaumPostcode onComplete={onComplete} />
        </Modal>
      )}
      <div>{zonecode}</div>
      <div>{address}</div>
      <div>{addressDetail}</div>
      <div></div>
      <br />
      <input
        value={zonecode}
        style={{ display: "block", width: "300px" }}
        readOnly
      />
      <input
        value={address}
        style={{ display: "block", width: "300px" }}
        readOnly
      />
      <input
        onChange={onChangeAddressDetail}
        value={addressDetail}
        style={{ display: "block", width: "300px" }}
      />
      <br />
      <button onClick={onClickOpenModal}>주소 검색하기</button>
    </>
  );
}
