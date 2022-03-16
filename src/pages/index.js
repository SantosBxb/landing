import Head from 'next/head';
import Cards from '../components/cards';
import Hero from '../components/hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>yo-opino</title>
        <meta name="description" content="yo-opino" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <>
        <Hero/>
        <Cards/>
      </>

    </>
  )
}
