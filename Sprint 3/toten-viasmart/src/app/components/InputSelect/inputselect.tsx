'use client';
import { useState, useRef, useEffect } from "react";

const options = [
    'Jabaquara', 'Conceição', 'São Judas', 'Saúde', 'Praça da Árvore', 
    'Santa Cruz', 'Vila Mariana', 'Ana Rosa', 'Paraíso', 'Vergueiro', 
    'São Joaquim', 'Liberdade', 'Sé', 'São Bento', 'Luz', 'Tiradentes', 
    'Armênia', 'Portuguesa-Tietê', 'Carandiru', 'Santana', 'Jardim São Paulo-Ayrton Senna', 
    'Parada Inglesa', 'Tucuruvi', 'Vila Prudente', 'Tamanduateí', 'Sacomã', 
    'Alto do Ipiranga', 'Santos-Imigrantes', 'Chácara Klabin', 'Brás', 'Pedro II', 
    'Bresser-Mooca', 'Belém', 'Tatuapé', 'Carrão', 'Penha', 'Vila Matilde', 
    'Guilhermina-Esperança', 'Patriarca', 'Artur Alvim', 'Corinthians-Itaquera', 
    'Butantã', 'Pinheiros', 'Faria Lima', 'Paulista', 'Higienópolis-Mackenzie', 
    'República', 'Santa Cecília', 'Marechal Deodoro', 'Palmeiras-Barra Funda',
];

interface InputFilterProps {
  placeholderText: string;
}

export default function InputFilter({ placeholderText }: InputFilterProps) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current !== event.target
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6 relative">
      <div className="relative w-[1500] h-[30]  border border-[#3B48EF] rounded-full bg-white p-20 flex items-center text-3xl">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholderText} 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full p-2 outline-none text-[#3B48EF] bg-transparent"
        />
      </div>
      {isFocused && (
        <div
          ref={dropdownRef}
          className="absolute top-50 w-[1400] bg-white border-0 rounded-lg shadow-md max-h-50 overflow-auto z-10"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                className="p-2 text-3xl text-gray-700 hover:bg-gray-200 cursor-pointer"
                onMouseDown={() => {
                  setSelected(option);
                  setSearch(option);
                  setIsFocused(false);
                }}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">Nenhuma opção encontrada</div>
          )}
        </div>
      )}
      {selected && <p className="mt-2" hidden>Opção selecionada: {selected}</p>}
    </div>
  );
}