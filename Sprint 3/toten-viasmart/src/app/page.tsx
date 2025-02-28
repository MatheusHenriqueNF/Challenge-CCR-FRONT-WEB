import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={'/Idioma'}>

        <div className="w-full h-10 bg-amber-200 p-10">

          <h1 className="text-4xl text-[#3B48EF] font-semibold">ViaSmart</h1>
          <div className="w-45 h-2 bg-gradient-to-r from-[#3B48EF] to-white"></div>
          
        </div>

        <div className="w-full mt-3 h-full bg-amber-200 flex space-x-2">

          <div className="w-240 ml-18 mt-20 bg-amber-700 flex-col">
            <h2 className="text-9xl font-semibold text-black">Busque <span className="text-[#3B48EF]">Novas</span> formas de <span className="text-[#3B48EF]">ir</span></h2>
            <p className="ml-80 text-2xl text-black font-light mt-5">Toque para iniciar</p>
          </div>

          <div className="bg-[#3B48EF] w-100 h-151 rounded-full ml-30"></div>

        </div>
      </Link>
    </>
  );
}