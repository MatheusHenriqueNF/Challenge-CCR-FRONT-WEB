import Link from "next/link";
import Botao from "../../components/Botao/botao";
import Card from "../../components/Cards/card";

const Menu = () => {
    return(
        <>
            <div className="w-full h-screen bg-white ">

                <Link href={"/pages/Idioma"}>
                    <div className="w-full h-20 flex justify-end items-center pr-12">
                        <Botao titulo="Voltar" cor="#3B48EF"/>
                    </div>
                </Link>

                <div className="flex justify-center items-center pt-16">
                    <div className="w-full h-[70vh] flex justify-center items-center flex-wrap gap-25">
                       <Link href={"/pages/Consulta"}><Card titulo="Consultar Rota" imagem="/image/map.png" descricao="Icone"/></Link>
                       <Link href={"/pages/Informacao"}><Card titulo="Informações de Linha" imagem="/image/ajuda.png" descricao="Icone"/></Link>
                       <Link href={"/pages/ChatBot"}><Card titulo="Ajuda" imagem="/image/users.png" descricao="Icone"/></Link>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Menu