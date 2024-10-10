'use client'
import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { usePage } from "@/hooks/usePage";

const Page = () => {

  const {
    questions,
    title,
    currentQuestion,
    handleAnswered,
    showResult,
    answers
  } = usePage();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          }
          {showResult &&
            <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;