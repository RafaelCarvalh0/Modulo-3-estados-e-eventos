import { Quiz as quiz } from "@/data/QuizData"
import { Quiz } from "@/types/Quiz";
import { ReactNode, useState } from "react"

type Props = {
    id: number;
    key: number;
    isCorrectResponse: boolean;
}

export const useHome = () => {
    const [page, setPage] = useState(0);
    const [selectedResponse, setselectedResponse] = useState<Props | null>(null);
    const [score, setScore] = useState<number>(0);
    const [percentage, setPercentage] = useState<number>(0);
    const [showResult, setShowResult] = useState<boolean>(false);

    const handleSubmit = (quiz: Quiz[], key: number) => {

        if (selectedResponse !== null) return;

        else if (key === quiz[page].TrueResponse) {
            setselectedResponse({
                id: quiz[page].Id,
                key: key,
                isCorrectResponse: true
            });
            setScore(prevScore => prevScore + 1)
            const newPercentage = ((score + 1) / quiz.length * 100);
            setPercentage(newPercentage);
        }
        else {
            setselectedResponse({
                id: quiz[page].Id,
                key: key,
                isCorrectResponse: false
            });
            //setScore((score + 0) / quiz.length * 100)
        }
    }

    const handleNextQuestion = () => {

        if (page === quiz.length - 1)
            setShowResult(true);
        else
            setPage(page + 1)

        setselectedResponse(null)
    }

    const handleRestartQuiz = () => {
        setPage(0);
        setScore(0);
        setPercentage(0);
        setShowResult(false);
    }

    return {
        page,
        quiz,
        handleSubmit,
        handleRestartQuiz,
        selectedResponse,
        percentage,
        handleNextQuestion,
        showResult
    }
}