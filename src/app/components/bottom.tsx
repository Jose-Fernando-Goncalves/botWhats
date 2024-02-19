
import Counter from "./counter";

export default function Bottom() {

    return (
        <div className="w-full md:w-2/3 h-fit min-h-52 grid xl:grid-cols-3 grid-cols-1 gap-12 bg-zinc-100 rounded-md px-8 py-4 antialiased">
            <div className="flex flex-col gap-1 justify-center items-center border-b py-12 xl:py-0 xl:border-r xl:border-b-0">
                <Counter value={1830} durationTime={1} />
                <p className='text-xl text-zinc-500 font-medium'>Usuários</p>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center border-b pb-12 xl:pb-0 xl:border-r xl:border-b-0">
                <Counter value={7239} durationTime={2} />
                <p className='text-xl text-zinc-500 font-medium'>Mensagens enviadas</p>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center pb-12 xl:pb-0">
                <Counter value={2400} durationTime={2.4} />
                <p className='text-xl text-zinc-500 font-medium'>Prompts criados</p>
            </div>
        </div>
    );
}
