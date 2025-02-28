import React from "react";

type BotaoProps = {
  titulo?: string;
  clicando?: () => void;
  cor?: string;
};

const Botao: React.FC<BotaoProps> = ({
  titulo = "Titulo",
  clicando,
  cor = "#3B48EF",
}) => {
  return (
    <div
      className="w-40 h-12 rounded-2xl flex justify-center items-center font-semibold cursor-pointer"
      style={{ backgroundColor: cor }} // Define a cor diretamente aqui
      onClick={clicando}
    >
      <p>{titulo}</p>
    </div>
  );
};

export default Botao;
