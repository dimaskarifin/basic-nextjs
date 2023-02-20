import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout pageTitle='Home Page'>
      <Image src="/web.png" width={780} height={460} alt='Web Image' />
      <h1 className='title'>Welcome Dimas</h1>
    </Layout>
  )
}
