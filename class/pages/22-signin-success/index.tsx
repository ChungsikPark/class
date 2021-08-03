import { gql, useQuery } from '@apollo/client'
import router, { useRouter } from 'next/router'
import { useContext } from 'react'
import { useEffect } from 'react'
import { IQuery } from '../../src/commons/types/generated/types'
import { GlobalContext } from '../_app'

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`

export default function SignInSuccessPage() {
  const router = useRouter()
  const { accessToken } = useContext(GlobalContext)
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

  useEffect(() => {
    if (!accessToken) router.push("/22-signin")
  })
  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다~</div>
    </>
  )
}