import { Quiz } from "@/types/Quiz";

type Props = {
    page: number;
    questions: Quiz[];
    selectedResponse: any;
    handleSubmit: (quiz: Quiz[], key: number) => void;
    handleRestartQuiz: () => void;
}

export const QuestionItem = ({ page, questions, selectedResponse, handleSubmit, handleRestartQuiz }: Props) => {
    return (
        <div className="p-5">
            <h1 className="text-3xl pt-4 font-bold">{questions[page].Question}</h1>
            <ul className="mb-2">
                {questions[page].Response.map((item, key) => {
                    return (
                        <li key={key} onClick={() => handleSubmit(questions, key)} className={`pl-2 w-full py-2 my-6 rounded border ${selectedResponse === null ? 'bg-blue-100 border-blue-300 cursor-pointer hover:opacity-60' : selectedResponse.key === key ? selectedResponse.isCorrectResponse === true ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300' : 'bg-blue-100'}`}>{item}</li>
                    )
                })}
            </ul>
        </div>
    );
}