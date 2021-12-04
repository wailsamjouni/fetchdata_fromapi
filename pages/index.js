import Head from 'next/head'
import Body from '../components/Body'

export default function Home() {
  return (
    <div className="flex flex-col py-0 px-6 bg-transparent">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Body />
    </div>
  )
}


