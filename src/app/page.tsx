import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/widgets/Header'

export default function Home() {
  return <Header isMobile={false} />
}
