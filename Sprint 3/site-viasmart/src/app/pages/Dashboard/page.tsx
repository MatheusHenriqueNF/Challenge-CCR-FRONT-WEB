import Image from 'next/image';

export default function Dashboard() {
    return (
      <div className="w-full h-screen bg-white flex flex-col">
        {/* Cabeçalho */}
        <header className="bg-blue-700 text-white flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/image/logo_ccr.png" alt="CCR ViaSmart" className="h-10" width={60} height={60} />
            <div className='w-[2] h-[30] bg-white'></div>
            <h1 className="text-lg font-light">ViaSmart</h1>
          </div>
          <div className="flex gap-4">
            <button className="text-white">Filtro</button>
            <button className="text-white">Filtro</button>
            <button className="text-white">Filtro</button>
            <button className="text-white">Filtro</button>
            <button className="text-white">Filtro</button>
          </div>
        </header>
  
      
        <div className="p-6 border border-blue-500 rounded-md mx-4 my-6">
         
          <div className="flex justify-end mb-4">
            <input
              type="text"
              placeholder="Pesquise o nome da estação"
              className="border border-gray-300 px-4 py-2 rounded-md shadow-sm"
            />
          </div>
  
        
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              
              <thead>
                <tr className="bg-gray-200 text-center">
                  <th className="border border-gray-300 px-4 py-2">Linha</th>
                  <th className="border border-gray-300 px-4 py-2">Estação</th>
                  <th className="border border-gray-300 px-4 py-2">Ação</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
              </thead>
  
              <tbody>
                <tr className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">Linha 1 - Azul</td>
                  <td className="border border-gray-300 px-4 py-2">Vila Mariana</td>
                  <td className="border border-gray-300 px-4 py-2 flex gap-2">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">Normal</td>
                </tr>
  
                <tr className="border border-gray-300 bg-blue-100">
                  <td className="border border-gray-300 px-4 py-2">Linha 1 - Azul</td>
                  <td className="border border-gray-300 px-4 py-2">Vila Mariana</td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">Alterada</td>
                </tr>

                <tr className="border border-gray-300 bg-gray-100 h-16">
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  