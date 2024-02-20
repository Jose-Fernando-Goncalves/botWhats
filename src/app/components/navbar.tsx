'use client'
import { BsCheck, BsQrCode } from "react-icons/bs";
import { motion } from "framer-motion"
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import QRCode from "react-qr-code";
import axios from "axios";

export default function Navbar() {
    const [showQrCode, setShowQrCode] = useState(false);
    const [codeQR, setCodeQR] = useState<string | null>(localStorage.getItem('qrCode'));
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function getQrCode() {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/initialize');
            if (response.data.qrCode) {
                setCodeQR(response.data.qrCode);
                localStorage.setItem('qrCode', response.data.qrCode);
            }
            if (response.data.ready) {
                setIsLoading(false);
                setIsReady(true);
            }
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }


    async function destroyQrCode() {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/destroy');
            if (response.data.success === true || response.data.success === false && response.data.error === "Cannot read properties of undefined (reading 'destroy')") {
                localStorage.removeItem('qrCode');
                setCodeQR(null);
            }
        } catch (error) {

        }
        setIsLoading(false);
    }

    return (
        <>
            <div className="w-full h-fit p-2 bg-zinc-100 fixed flex items-center justify-end px-12">
                <div onClick={() => setShowQrCode(!showQrCode)} className="p-2 group bg-white border border-emerald-600 hover:border-emerald-500 transition-all rounded-full flex items-center justify-center w-fit h-fit cursor-pointer">
                    <BsQrCode className="text-2xl text-emerald-600 group-hover:text-emerald-500 transition-all" />
                </div>

            </div>

            {showQrCode && <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 66 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-72 h-fit rounded-md bg-zinc-100 fixed border flex items-center py-4 pb-8 px-6 z-50 right-10 flex-col gap-4"
            >
                {codeQR ?
                    <div className="relative">
                        <QRCode
                            className={`w-[232px] h-[232px] ${isReady && 'border-4 transition-all'} border-emerald-600`}
                            value={codeQR}
                            viewBox={`0 0 256 256`}
                        />
                        {isReady && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 w-fit h-fit bg-emerald-600 rounded-full">
                            <BsCheck className="w-14 h-14 text-white" />
                        </motion.div>}
                    </div>
                    :
                    <BsQrCode className="w-[232px] h-[232px] text-zinc-300" />
                }



                {!isReady && <div onClick={() => !isLoading && getQrCode()} className="px-4 py-2 flex items-center justify-center w-full font-medium bg-emerald-600 text-white cursor-pointer hover:bg-emerald-500 transition-all">
                    {isLoading ? <CgSpinner className="animate-spin w-6 h-6 text-white" /> : <p>Init</p>}
                </div>}

                {codeQR && !isLoading &&
                    <div onClick={() => destroyQrCode()} className="px-4 py-2 flex items-center justify-center w-full font-medium bg-emerald-600 text-white cursor-pointer hover:bg-emerald-500 transition-all">
                        {<p>Deletar QR Code</p>}
                    </div>}
            </motion.div>}
        </>
    );
}
