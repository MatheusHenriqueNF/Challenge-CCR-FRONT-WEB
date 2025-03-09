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
      className="w-full h-[50] py-2 mb-2 rounded-2xl text-center cursor-pointer"
      style={{ backgroundColor: cor,
               color: corTexto    
       }} 
      onClick={clicando}
    >
      <p className="text-2xl font-light">{titulo}</p>
    </div>
  );
};

export default BotaoFiltro;
