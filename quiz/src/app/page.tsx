'use client'
import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { useHome } from "@/hooks/useHome";
import Image from "next/image";
import { Fragment, useEffect } from "react";

export default function Home() {

  const {
    page,
    quiz,
    handleSubmit,
    handleRestartQuiz,
    selectedResponse,
    percentage,
    handleNextQuestion,
    showResult
  } = useHome();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600 text-black">
      <div className="max-w-3xl w-3/5 bg-white shadow shadow-black rounded-md">

        <div className="border-b pl-5 pr-5 pt-5 border-gray-300">
          <p className="text-right">Pontuação: {percentage}</p>

          <div className="flex flex-row justify-between py-2">
            <h1 className="text-2xl font-bold">Quiz de Culinária</h1>
            {selectedResponse !== null &&
              <button onClick={handleNextQuestion} className="border border-orange-300 rounded-md w-24 text-center p-2 hover:bg-orange-200 hover:text-white font-bold text-orange-300">Próxima</button>
            }
          </div>
        </div>

        <div className="p-5">
          {!showResult &&
            < QuestionItem page={page} questions={quiz} selectedResponse={selectedResponse} handleSubmit={handleSubmit} handleRestartQuiz={handleRestartQuiz} />
          }
          {showResult &&
            <Results />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            <p className="">{page + 1} de {quiz.length} perguntas</p>
          }
          {showResult &&
            <button onClick={handleRestartQuiz} className="border border-green-300 rounded-md text-center p-2 hover:bg-green-100 hover:text-green-500 font-bold text-green-500">Reiniciar quiz</button>
          }
        </div>
      </div>
    </div>
  );
}
