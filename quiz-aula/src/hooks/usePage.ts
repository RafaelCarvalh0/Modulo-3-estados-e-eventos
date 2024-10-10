import { questions } from "@/data/questions"
import { useState } from "react"

export const usePage = () => {
    const [answers, setAnswers] = useState<number[]>([])
    const [title, setTitle] = useState<string>("Quiz de culinária")
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [showResult, setShowResult] = useState(false);

    const loadNextQuestion = () => {
        if (questions[currentQuestion + 1]) {
            setCurrentQuestion(currentQuestion + 1)
        }
        else {
            setShowResult(true);
        }
    }

    const handleAnswered = (answer: number): void => {
        setAnswers([...answers, answer]);
        loadNextQuestion();
    }

    return {
        questions,
        title,
        currentQuestion,
        handleAnswered,
        showResult
    }
}