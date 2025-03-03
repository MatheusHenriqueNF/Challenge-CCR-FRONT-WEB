import React from "react";
import Input from "../Input/input";
import Botao from "../Botao/botao";

type InputConfig = {
    label: string;
    placeholder: string;
};

type PreencherProps = {
    titulo?: string;
    corTexto?: string;
    inputs: InputConfig[]; // Array contendo os inputs dinâmicos
    botaoTitulo: string; // Texto do botão
};

const Preencher: React.FC<PreencherProps> = ({
    titulo = "Título",
    corTexto = "green",
    inputs = [],
    botaoTitulo = "Enviar"
}) => {
    return (
        <div className="w-[600px] h-[735px] bg-white rounded-r-3xl p-6">
            <h1 className="text-[30px] font-semibold mb-4" style={{ color: corTexto }}>
                {titulo}
            </h1>

            <form className="h-[600px] flex flex-col justify-center items-center mt-4">
                {inputs.map((input, index) => (
                    <Input
                        key={index}
                        label={input.label}
                        placeholder={input.placeholder}
                    />
                ))}

                <Botao titulo={botaoTitulo} />
            </form>
        </div>
    );
};

export default Preencher;