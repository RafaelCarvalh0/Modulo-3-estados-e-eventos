import { Quiz as quiz } from "@/data/QuizData"
import { Quiz } from "@/types/Quiz";
import { ReactNode, useState } from "react"

type Props = {
    id: number;
    index: number;
    isCorrectResponse: boolean;
}

export const useHome = () => {
    const [page, setPage] = useState(0);
    const [selectedResponse, setselectedResponse] = useState<Props | null>(null);
    const [score, setScore] = useState<number>(0);
    const [percentage, setPercentage] = useState<number>(0);

    const handleSubmit = (quiz: Quiz[], selectedResponse: ReactNode, index: number) => {

        setTimeout(() => {
            if (page === quiz.length - 1) {
                setPage(0);
                setScore(0);
                setPercentage(0);
            }
            else
                setPage(page + 1)

            setselectedResponse(null)
        }, 2000);

        if (selectedResponse === quiz[page].TrueResponse) {
            setselectedResponse({
                id: quiz[page].Id,
                index: index,
                isCorrectResponse: true
            });
            setScore(prevScore => prevScore + 1)
            const newPercentage = ((score + 1) / quiz.length * 100);
            setPercentage(newPercentage);
        }
        else {
            setselectedResponse({
                id: quiz[page].Id,
                index: index,
                isCorrectResponse: false
            });
            //setScore((score + 0) / quiz.length * 100)
        }
    }

    return {
        page,
        quiz,
        handleSubmit,
        selectedResponse,
        percentage
    }
}