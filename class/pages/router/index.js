import { useRouter } from 'next/router';

export default function RouterPage() {
  const router = useRouter()

  const onClickMove = () => {
    router.push('/detail/1')
  }

  return(
    <>
      <button onClick={onClickMove}>이동하기</button>
    </>
  )
}