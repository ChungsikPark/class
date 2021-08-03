import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useContext , ChangeEvent, useState } from "react"

import { IMutation, IMutationLoginUserArgs } from "../../src/commons/types/generated/types"
import { GlobalContext } from '../_app'

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!){
    loginUser(email: $email, password: $password){
      accessToken
    }
  }
`

export default function SignInPage() {
  const { setAccessToken } = useContext(GlobalContext)
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER)

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password
        }
      })
      setAccessToken(result.data?.loginUser.accessToken || '')
      router.push("/22-signin-success")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      이메일: <input onChange={onChangeEmail} type="text" />
      비밀번호: <input onChange={onChangePassword} type="text" />
      <button onClick={onClickLogin}>SIGN IN</button>
    </>
  )
}