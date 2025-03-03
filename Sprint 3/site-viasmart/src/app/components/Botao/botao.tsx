import React from "react";

type BotaoProps = {
  titulo?: string;
  clicando?: () => void;
  cor?: string;
  corTexto?: string;
};

const Botao: React.FC<BotaoProps> = ({
  titulo = "Titulo",
  clicando,
  cor = "#3B48EF",
  corTexto = "white" // Define a cor diretamente aqui
}) => {
  return (
    <div
      className="w-60 h-12 rounded-3xl flex justify-center items-center font-semibold cursor-pointer"
      style={{ backgroundColor: cor,
               color: corTexto    
       }} 
      onClick={clicando}
    >
      <p className="text-2xl font-light">{titulo}</p>
    </div>
  );
};

export default Botao;
