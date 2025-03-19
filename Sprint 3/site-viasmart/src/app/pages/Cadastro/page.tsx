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
          { label: "Usuário", placeholder: "Digite o usuário",name: "usuario" },
          { label: "CPF", placeholder: "Digite o CPF",name:"cpf" },
          { label: "Senha", placeholder: "Digite a senha",name:"senha" },
          { label: "Senha", placeholder: "Confirme a senha",name:"confirmarSenha" },
        ]}
        botaoTitulo="Cadastrar"
      />
    </div>
  );
}
