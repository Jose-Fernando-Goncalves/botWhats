import Image from 'next/image';
import logo from '../../../public/logoBot.png';

export default function Header() {
    return (
        <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-center gap-8">
            <Image src={logo} className='w-[250px] h-[250px]' alt="logo" />
            <div className='flex flex-col gap-2 items-center'>
                <div className='flex gap-2 text-7xl lg:text-8xl'>
                    <h1 className='font-bold text-zinc-700'>Bot</h1><h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400'>Whats</h1>
                </div>

                <p className='text-sm lg:text-xl text-zinc-400'>Bot para envio de mensagens no WhatsApp Web</p>
            </div>
        </div>

    );
}
