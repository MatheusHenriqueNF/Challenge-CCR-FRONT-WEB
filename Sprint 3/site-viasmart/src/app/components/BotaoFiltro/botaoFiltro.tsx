import React from "react";

type BotaoProps = {
  titulo?: string;
  clicando?: () => void;
  cor?: string;
  corTexto?: string;
};

const BotaoFiltro: React.FC<BotaoProps> = ({
  titulo = "Titulo",
  clicando,
  cor = "#2B7FFF",
  corTexto = "white" 
}) => {
  return (
    <div
    className="w-3/4 sm:h-[60px] md:h-[70px] lg:h-[50px] py-2 mb-2 rounded-2xl text-center cursor-pointer"
      style={{ backgroundColor: cor,
               color: corTexto    
       }} 
      onClick={clicando}
    >
      <p className="text-lg sm:h-[60px] md:text-xl font-light">{titulo}</p>
    </div>
  );
};

export default BotaoFiltro;
