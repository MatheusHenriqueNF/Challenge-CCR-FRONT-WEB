import Botao from "../components/Botao/botao";
import CardIdioma from "../components/Cards_Idioma/cardsIdioma";


const Idioma = ()=>{
    return(
        <>
            <div className="w-full h-screen bg-[#3B48EF] ">
                
                <div className="w-full h-20 flex justify-end items-center pr-12">
                    <Botao titulo="Voltar" cor="white"/>
                </div>

                <div className="flex justify-center items-center pt-16">
                    <div className="w-1/2 h-1/2 flex justify-center items-center flex-wrap gap-25">
                        <CardIdioma imagem="/image/ingles.png" titulo="English"/>
                        <CardIdioma imagem="/image/portugues.png" titulo="Português"/>
                    </div>
                </div>

                <div className="w-full h-auto flex justify-center items-center pt-10 flex flex-col gap-2">
                    <p className="font-semibold text-5xl text-white">Escolha o idioma</p>
                    <p className="font-semibold text-3xl text-white">Choose a language</p>
                </div>
                
            </div>
        </>
    );
}

export default Idioma