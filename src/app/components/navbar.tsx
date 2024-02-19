'use client'
import { BsQrCode } from "react-icons/bs";
import QRCode from "react-qr-code";
import { motion } from "framer-motion"
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";

export default function Navbar() {
    const [showQrCode, setShowQrCode] = useState(false);
    const [codeQR, setCodeQR] = useState<string | null>(localStorage.getItem('qrCode'));
    const [isLoading, setIsLoading] = useState(false);

    async function getQrCode() {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/initialize');
            localStorage.setItem('qrCode', response.data);
            setCodeQR(response.data);
        } catch (error) {

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

    async function handleClickQrButton() {
        if (codeQR) {
            await destroyQrCode();
        } else {
            await getQrCode();
        }
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
                    <QRCode
                        className="w-[232px] h-[232px]"
                        value={codeQR}
                        viewBox={`0 0 256 256`}
                    />
                    :
                    <BsQrCode className="w-[232px] h-[232px] text-zinc-300" />
                }

                <div onClick={() => !isLoading && handleClickQrButton()} className="px-4 py-2 flex items-center justify-center w-full font-medium bg-emerald-600 text-white cursor-pointer hover:bg-emerald-500 transition-all">
                    {isLoading ? <CgSpinner className="animate-spin w-6 h-6" /> : codeQR ? <p>Deletar QR Code</p> : <p>Gerar QR Code</p>}
                </div>
            </motion.div>}
        </>
    );
}
