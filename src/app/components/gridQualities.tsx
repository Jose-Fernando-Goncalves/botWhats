import { motion } from "framer-motion"

export default function GridQualities() {
    return (
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-fit md:w-2/3 h-fit grid xl:grid-cols-3 grid-cols-1 gap-12 mt-24 px-12">
            <div className="flex flex-col gap-3 justify-center">
                <p className='text-xl text-zinc-600 font-bold'>Customizável</p>
                <div className="flex h-24">
                    <p className='text-base text-zinc-400'>Totalmente personalizável pra você deixar o ambiente com sua marca.</p>
                </div>
            </div>

            <div className="flex flex-col gap-3 justify-center items-start">
                <p className='text-xl text-zinc-600 font-bold'>Resposta Automática de Mensagens</p>
                <div className="flex h-24">
                    <p className='text-base text-zinc-400'>Automação de respostas para mensagens enviadas para o bot. Teste enviando um <span className="text-emerald-600 font-medium">!ping</span>.</p>
                </div>
            </div>

            <div className="flex flex-col gap-3 justify-center items-start">
                <p className='text-xl text-zinc-600 font-bold'>Segurança</p>
                <div className="flex h-24">
                    <p className='text-base text-zinc-400'>O Whatsapp-web.js se conecta a uma versão oficial do WhatsApp Web, o que reduz os riscos de bloqueio.</p>
                </div>
            </div>
        </motion.div>
    );
}
