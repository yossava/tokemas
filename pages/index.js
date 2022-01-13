import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Content from '../containers/content'

export default function Home() {
  return (
    <div className='w-full bg-fixed p-5 bg-cover' style={{ backgroundImage: `url("img/bg3.jpg")` }}>
      <Head>
        <title>Toko Emas</title>
        <meta name="description" content="Software Toko Emas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-wrap bg-white/80 rounded-xl backdrop-blur-md'>
        <Sidebar />
        <Content />
      </div>

    </div>

  )
}
