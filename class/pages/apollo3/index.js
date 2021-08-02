import { useState } from "react";
import { useMutation, gql } from '@apollo/client'

export default function ApolloPage() {
  
  const [seller, setSeller] = useState();
  const [productName, setProductName] = useState();
  const [productDetail, setProductDetail] = useState();
  const [productPrice, setProductPrice] = useState();

  const [submit] = useMutation(
    gql`
      mutation ggggg($seller: String, $createProductInput: CreateProductInput!){
        createProduct(
          seller: $seller,
          createProductInput: $createProductInput
        ){
          _id
          message
        }
      }
    `
  )
  
  const onClickSubmit = () => {
    console.log(seller)
    console.log(productName)
    console.log(productDetail)
    console.log(productPrice)
    submit({
      variables: {
        seller: seller,
        createProductInput: {
          name: productName,
          detail: productDetail,
          price: Number(productPrice)
        }
      }
    })
  }
  
  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }

  const onChangeProductName = (event) => {
    setProductName(event.target.value)
  }

  const onChangeProductDetail = (event) => {
    setProductDetail(event.target.value)
  }

  const onChangeProductPrice = (event) => {
    setProductPrice(event.target.value)
  }

  return(
    <>
      <hr/>
      판매자: <input type='text' onChange={onChangeSeller}/>
      <hr />
      상품 이름: <input type='text' onChange={onChangeProductName}/>
      <hr />
      상품 상세: <input type='text' onChange={onChangeProductDetail}/>
      <hr />
      상품 가격: <input type='text' onChange={onChangeProductPrice}/>
      <hr />
      <button onClick={onClickSubmit}>상품 등록하기</button>
    </>
  )
}