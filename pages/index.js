import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Result from '../components/Result';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Streaming</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>

      {/* Navbar */}
      <Navbar/>

      {/* footer */}
      <Result/>

      <h1>saurah grewal</h1> 
    </div>
  )
}
