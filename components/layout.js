import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Content from '../containers/content'

export default function Layout({ children }) {
    return (
        <>
            <div className='transition duration-500 w-full min-h-screen p-5 bg-cover bg-no-repeat bg-left-top' style={{ backgroundImage: `url("img/bg3.jpg")`, minWidth: "1200px" }}>
                <Head>
                    <title>Toko Emas</title>
                    <meta name="description" content="Software Toko Emas" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className='flex flex-wrap bg-white/80 rounded-xl backdrop-blur-md h-full'>
                    <Sidebar />
                    <Content content={children} />
                </div>

            </div>
        </>
    )
}