import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-slate-600 text-white text-3xl text-bold h-screen grid place-content-center">
      <h1 >Hello!</h1>
    </main>
  );
}
