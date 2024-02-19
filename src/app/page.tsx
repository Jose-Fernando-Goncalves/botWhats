'use client'
import Bottom from './components/bottom';
import Header from './components/header';
import Start from './components/start';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 items-center gap-24 lg:p-24 p-12 pt-24">
      <Header />
      <Start />
      <Bottom />
    </main >
  );
}
