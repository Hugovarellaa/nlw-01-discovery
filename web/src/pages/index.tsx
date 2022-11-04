import { GetServerSideProps } from 'next'

export default function Home() {
  return (
    <div>
      <h1>Primeiro render</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}
