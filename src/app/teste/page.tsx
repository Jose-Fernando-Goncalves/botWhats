'use client'
import axios from "axios";
import { useState } from "react";
import { FaArrowRight, FaTrash, FaUpload } from "react-icons/fa";
import { PatternFormat } from 'react-number-format';
import { AnimatePresence, motion } from "framer-motion"
import ReactFileReader from 'react-file-reader';
import GridQualities from "../components/gridQualities";
import WhyUse from "../components/whyUse";
import { CgSpinner } from "react-icons/cg";

export default function Teste() {
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState('Mensagem enviada pelo BotWhats!');
  const [media, setMedia] = useState(null);
  const [steps, setSteps] = useState({ alreadySent: false, alreadyModifyMessage: false });
  const [isSending, setIsSending] = useState(false);

  async function handleSendMessage(modifiedMessage?: boolean) {

    let number = telefone.toString().replace(/[- )( +]/g, "");
    if (number.length === 13) {
      setIsSending(true);

      try {
        let data = {
          number: number,
          message: message,
          media: media
        }

        const response = await axios.post('http://localhost:5000/sendMsg', data);

        if (response.data.success === true) {

          if (modifiedMessage) {
            setSteps({ ...steps, alreadyModifyMessage: true })
          } else {
            setSteps({ ...steps, alreadySent: true })
          }
        }

      } catch (error) {

      }
      setIsSending(false);
    }

  }

  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 items-center pt-24 pb-12 overflow-x-hidden">

      <motion.div className="w-full xl:w-2/3 h-fit flex flex-col xl:flex-row justify-center xl:items-end items-center gap-12 xl:gap-48 border-b py-12">
        <p className='xl:text-4xl md:text-3xl text-xl font-semibold text-zinc-600 max-w-[400px] xl:max-w-[550px] text-center xl:text-start'>
          Digite um número, o bot irá enviar uma mensagem para o número informado
        </p>

        <div className="flex gap-2">
          <PatternFormat
            value={telefone}
            onChange={(e: any) => setTelefone(e.target.value)}
            placeholder="+00 (00) 00000-0000"
            format="+## (##) #####-####"
            className={`font-medium text-xl p-4 bg-zinc-100 border rounded xl:w-64 w-full h-14 flex outline-zinc-400`}
          />

          {steps.alreadySent === false &&
            <motion.div exit={{ scale: 0 }} transition={{ duration: 1 }} onClick={() => isSending === false && handleSendMessage()} className={`xl:w-14 w-[4.5rem] h-14 ${telefone.toString().replace(/[- )( +]/g, "").length === 13 ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-zinc-300'} transition-all rounded flex items-center justify-center cursor-pointer`} >
              {isSending ? <CgSpinner className="animate-spin w-6 h-6 text-white" /> : <FaArrowRight className="text-2xl text-white" />}
            </motion.div>
          }

        </div>
      </motion.div>

      {steps.alreadySent === true &&
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, type: 'spring' }} className="border-b py-12 w-full xl:w-2/3 h-fit flex flex-col-reverse xl:flex-row justify-center xl:items-start items-center gap-12 xl:gap-48">
          <div className="flex flex-col gap-2 w-full max-w-[400px]">
            <textarea value={message} onChange={(e: any) => setMessage(e.target.value)} maxLength={146} className={`font-medium text-xl p-4 bg-zinc-100 border rounded w-full h-48 flex outline-zinc-400 resize-none`} />
            <div onClick={() => telefone.toString().replace(/[- )( +]/g, "").length === 13 && isSending === false && handleSendMessage(true)} className={`w-full h-14 font-medium text-white ${telefone.toString().replace(/[- )( +]/g, "").length === 13 ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-zinc-300'} transition-all rounded flex items-center justify-center cursor-pointer`}>
              {isSending ? <CgSpinner className="animate-spin w-6 h-6" /> : <p className="text-xl">Mandar mensagem</p>}
            </div>
          </div>

          <p className='xl:text-4xl md:text-3xl text-xl font-semibold text-zinc-600 max-w-[400px]'>Você pode modificar a mensagem a qualquer momento</p>
        </motion.div>}

      {steps.alreadyModifyMessage === true &&
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, type: 'spring' }} className="border-b py-12 w-full xl:w-2/3 h-fit flex flex-col xl:flex-row justify-center xl:items-start items-center gap-12 xl:gap-48">
          <p className='xl:text-4xl md:text-3xl text-xl font-semibold text-zinc-600 max-w-[400px]'>Você pode anexar uma imagem a mensagem também</p>

          <div className="flex flex-col gap-2 w-full max-w-[400px]">
            <ReactFileReader handleFiles={(e: any) => setMedia(e.base64)} fileTypes={[".png"]} base64={true} >
              <div className={`border w-full h-48 flex items-center justify-center bg-zinc-100 relative group`}>
                {media ?
                  <img src={media} className="w-full h-full object-fill" />
                  : <div className="p-2 group-hover:bg-emerald-500/50 transition-all bg-emerald-600/50 rounded-full flex items-center justify-center">
                    <div className="p-3 group-hover:bg-emerald-500 transition-all bg-emerald-600 rounded-full flex items-center justify-center">
                      <FaUpload className="text-white text-2xl" />
                    </div>
                  </div>}
              </div>
            </ReactFileReader>

            <div className="flex gap-2">
              <div onClick={() => setMedia(null)} className={`w-1/6 h-14 font-medium text-white ${media && telefone.toString().replace(/[- )( +]/g, "").length === 13 ? 'bg-red-800 hover:bg-red-600' : 'bg-zinc-300'} transition-all rounded flex items-center justify-center cursor-pointer text-xl`}>
                <FaTrash />
              </div>

              <div onClick={() => media && telefone.toString().replace(/[- )( +]/g, "").length === 13 && isSending === false && handleSendMessage()} className={`w-full h-14 font-medium text-white ${media && telefone.toString().replace(/[- )( +]/g, "").length === 13 ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-zinc-300'} transition-all rounded flex items-center justify-center cursor-pointer`}>
                {isSending ? <CgSpinner className="animate-spin w-6 h-6" /> : <p className="text-xl">Mandar mensagem</p>}
              </div>
            </div>
          </div>
        </motion.div>}

      <GridQualities />
      <WhyUse />


    </main >
  );
}
