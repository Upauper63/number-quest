import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>□ を求める計算の練習！</h1>
      <Link href="add" passHref>
        <Button variant="contained">足し算</Button>
      </Link>
    </div>
  )
}
