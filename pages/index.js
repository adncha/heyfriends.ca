import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {PhoneForm} from "@components/PhoneForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Heyfriends.ca | Ask anything, answers everything.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
          <PhoneForm/>
      </main>

      <Footer />
    </div>
  )
}
