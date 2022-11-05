import { GetServerSideProps } from 'next'
import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import iconCheck from '../assets/icon-check.svg'
import logoImg from '../assets/logo.svg'
import avatarUser from '../assets/users-avatar-example.png'
import { api } from '../services/axios'

interface HomeProps {
  poolCount: string
  guessCount: string
  userCount: string
}

export default function Home({ poolCount, guessCount, userCount }: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
      <main>
        <Image src={logoImg} alt="" />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={avatarUser} alt="" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+ {userCount} </span>
            pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text"
            required
            placeholder="Qual nome do seu bolão?"
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            CRIAR MEU BOLÃO
          </button>
        </form>

        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100">
          <div className="flex items-end gap-6">
            <Image src={iconCheck} alt="Image de check" />
            <div className="flex flex-col">
              <strong className="font-bold text-2xl">+ {poolCount}</strong>
              <span>Bolões criados </span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-end gap-6">
            <Image src={iconCheck} alt="Image de check" />
            <div className="flex flex-col">
              <strong className="font-bold text-2xl">+ {guessCount}</strong>
              <span>Palpites enviados </span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="" />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [poolCount, guessCount, userCount] = await Promise.all([
    api.get('/pools/count'),
    api.get('/guesses/count'),
    api.get('/users/count'),
  ])

  return {
    props: {
      poolCount: poolCount.data.count,
      guessCount: guessCount.data.count,
      userCount: userCount.data.count,
    },
  }
}
