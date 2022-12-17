import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PhoneForm } from '@components/PhoneForm';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Heyfriends.ca | Ask anything, answers everything.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey Friends!" />
        <p className="description">
          Ask anything, <code>answers everything!</code>
        </p>
        <PhoneForm />
      </main>

      <Footer />
    </div>
  );
}
