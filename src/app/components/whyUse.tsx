import { motion } from "framer-motion"
import { BsRobot, BsShieldCheck, BsWhatsapp } from "react-icons/bs";

export default function WhyUse() {

    return (
        <div className="w-full xl:w-2/3 h-fit grid grid-rows-3 gap-12 mt-24 px-12">
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, type: 'spring' }} className="flex flex-col justify-center items-center xl:items-start gap-3">
                <div className="flex gap-2 items-center justify-center">
                    <BsWhatsapp className="text-2xl text-emerald-600" /> <p className='text-4xl text-zinc-600 font-bold'>Lorem ipsum dolor </p>
                </div>
                <div className="flex w-full xl:w-2/3">
                    <p className='text-xl text-zinc-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quaerat aliquid sequi quo praesentium ipsam culpa itaque, ea, fuga tempora neque, provident necessitatibus illo incidunt consequatur quia suscipit nemo tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique enim, ea ducimus quia amet id. A maxime dignissimos ratione, autem aliquid nostrum, dolore soluta debitis est molestiae eaque nisi?</p>
                </div>

                <div className="flex self-center xl:self-start w-fit h-fit bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer p-4 font-medium text-white rounded-md mt-12 text-xl">
                    Lorem ipsum dolor
                </div>

            </motion.div>

            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, type: 'spring' }} className="flex flex-col justify-center items-center xl:items-end gap-3">
                <div className="flex gap-2 items-center justify-center">
                    <p className='text-4xl text-zinc-600 font-bold'>Lorem ipsum dolor </p><BsRobot className="text-2xl text-emerald-600" />
                </div>

                <div className="flex w-full xl:w-2/3">
                    <p className='text-xl text-zinc-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quaerat aliquid sequi quo praesentium ipsam culpa itaque, ea, fuga tempora neque, provident necessitatibus illo incidunt consequatur quia suscipit nemo tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique enim, ea ducimus quia amet id. A maxime dignissimos ratione, autem aliquid nostrum, dolore soluta debitis est molestiae eaque nisi?</p>
                </div>

                <div className="flex self-center xl:self-end w-fit h-fit bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer p-4 font-medium text-white rounded-md mt-12 text-xl">
                    Lorem ipsum dolor
                </div>


            </motion.div>

            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, type: 'spring' }} className="flex flex-col justify-center items-center xl:items-start gap-3">
                <div className="flex gap-2 items-center justify-center">
                    <BsShieldCheck className="text-2xl text-emerald-600" /><p className='text-4xl text-zinc-600 font-bold'>Lorem ipsum dolor </p>
                </div>

                <div className="flex w-full xl:w-2/3">
                    <p className='text-xl text-zinc-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quaerat aliquid sequi quo praesentium ipsam culpa itaque, ea, fuga tempora neque, provident necessitatibus illo incidunt consequatur quia suscipit nemo tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique enim, ea ducimus quia amet id. A maxime dignissimos ratione, autem aliquid nostrum, dolore soluta debitis est molestiae eaque nisi?</p>
                </div>

                <div className="flex self-center xl:self-start w-fit h-fit bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer p-4 font-medium text-white rounded-md mt-12 text-xl">
                    Lorem ipsum dolor
                </div>

            </motion.div>
        </div>
    );
}
