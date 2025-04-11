import Head from 'next/head';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chatbot App</title>
        <meta name="description" content="A simple chatbot interface" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Chatbot</h1>
        <Chatbot />
      </main>
    </div>
  );
}