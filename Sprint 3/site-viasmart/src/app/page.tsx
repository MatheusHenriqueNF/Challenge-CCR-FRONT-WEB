import Logo from "./components/Logo/logo";
import Preencher from "./components/PreenchimentoDados/preenchimentodados";

export default function Home() {
    return (
        <div className="w-full h-screen bg-[#3B48EF] flex justify-center items-center p-8 box-border">
            <Logo />
            <Preencher
                titulo="Entrar"
                corTexto="#3B48EF"
                inputs={[
                    { label: "Usuário", placeholder: "Digite seu usuário", name: "usuario" },
                    { label: "Senha", placeholder: "Digite sua senha", name: "senha", type: "password" }
                ]}
                botaoTitulo="Entrar"
            />
        </div>
    );
}