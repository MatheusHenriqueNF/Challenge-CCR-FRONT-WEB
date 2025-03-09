import Logo from "../../components/Logo/logo";
import Preencher from "../../components/PreenchimentoDados/preenchimentodados";


export default function Home() {
  return (
    <div className="w-full h-screen bg-[#3B48EF] flex justify-center items-center p-8 box-border">
      <Logo />
      <Preencher
        titulo="Cadastrar"
        corTexto="#3B48EF"
        inputs={[
          { label: "Usuário", placeholder: "Digite o usuário" },
          { label: "CPF", placeholder: "Digite o CPF" },
          { label: "Senha", placeholder: "Digite a senha" },
          { label: "Senha", placeholder: "Confirme a senha" }
        ]}
        botaoTitulo="Cadastrar"
      />
    </div>
  );
}
