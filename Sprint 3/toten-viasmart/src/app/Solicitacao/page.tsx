import Link from "next/link";

const Solicitacao = () => {
    return(
        <>
            <Link href={"/Idioma"}>
                <div className="w-full h-screen bg-[#3B48EF] flex flex-col justify-center items-center">
                    <p className="text-6xl text-white font-semibold mb-30">Sua solicitação foi enviada com sucesso</p>
                    <p className="text-6xl text-white font-semibold">Por favor, aguarde!</p>
                </div>
            </Link>
        </>
    );
}

export default Solicitacao