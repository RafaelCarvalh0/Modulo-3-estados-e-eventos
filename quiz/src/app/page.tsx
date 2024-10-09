'use client'
import { useHome } from "@/hooks/useHome";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  const {
    page,
    quiz,
    handleSubmit,
    selectedResponse,
    percentage
  } = useHome();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600 text-black">
      <div className="max-w-3xl w-3/5 bg-white p-4 border-2 border-r-gray-600 border-b-gray-600 border-l-gray-300 border-t-gray-300 rounded-md">

        <div>
          <p className="text-right">Pontuação: {percentage}</p>
          <h1 className="text-2xl border-b-2 py-4 font-bold">Quiz de Culinária</h1>
        </div>

        <h1 className="text-3xl pt-4 font-bold">{quiz[page].Question}</h1>
        <ul className="border-b-2 mb-2">
          {quiz[page].Response.map((item, index) => {
            return (
              <li key={index} onClick={() => handleSubmit(quiz, item, index)} className={`pl-2 w-full py-2 my-6 rounded cursor-pointer ${selectedResponse === null ? 'bg-blue-200 hover:bg-blue-300' : selectedResponse.index === index ? selectedResponse.isCorrectResponse === true ? 'bg-green-400' : 'bg-red-400' : 'bg-blue-200 hover:bg-blue-300'}`}>{item}</li>
            )
          })}
        </ul>
        <p className="text-center pt-2">{page + 1} de {quiz.length} perguntas</p>
      </div>
    </div>
  );
}
