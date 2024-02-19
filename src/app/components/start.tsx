import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Start() {
    return (
        <div className="w-full h-fit flex flex-col lg:flex-row justify-center gap-12 lg:gap-48">
            <p className='text-4xl font-semibold text-zinc-600 max-w-[550px]'>Automação de mensagens utilizando a biblioteca <span className="text-emerald-600">Whatsapp-web.js</span></p>
            <Link href="/teste" className="group px-4 py-2 bg-emerald-600 hover:bg-emerald-500  rounded cursor-pointer h-fit flex self-end items-center justify-center gap-2">
                <p className='text-3xl font-semibold text-white'>Testar</p>
                <FaArrowRight className="group-hover:translate-x-1  transition-all text-xl text-white" />
            </Link>
        </div>
    );
}
