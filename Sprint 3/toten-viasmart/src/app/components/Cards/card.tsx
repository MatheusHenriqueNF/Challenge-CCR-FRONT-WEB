import React from "react";

type CardProps = {
    titulo ?: string;
    descricao ?: string;
    imagem ?: string;
    clicando ?: () => void;
}

const Card : React.FC<CardProps> = ({
    titulo = "Titulo",
    descricao = "Descrição",
    imagem = "https://www.google.com.br",
    clicando

}) =>{


    return(
        <>

         <div className="relative w-80 h-120 bg-[#3B48EF] opacity-70 rounded-3xl p-10">
             <img className="object-cover w-full h-70 bg-amber-100" src={imagem} alt={descricao} />
             <div className="bottom-0 left-0 w-full h-auto border-4 mt-5">
                <p className="text-white text-4xl font-semibold text-center">{titulo}</p>
             </div>
         </div>

        </>
    );
}

export default Card