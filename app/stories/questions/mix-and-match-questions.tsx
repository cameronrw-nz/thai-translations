import { useMemo, useState } from "react";
import { Container } from "../../common/container"
import { IQuestion } from "../stories";

interface IMixAndMatchQuestionsProps {
    questions: IQuestion[];
}

export function MixAndMatchQuestions(props: IMixAndMatchQuestionsProps) {
    const [questionIndex, setQuestionIndex] = useState<number>(-1);
    const [answerIndex, setAnswerIndex] = useState<number>(-1);
    const [correctQuestions, setCorrectQuestions] = useState<IQuestion[]>([]);
    const randomisedQuestions = useMemo(() => props.questions.sort(() => Math.random() - 0.5).map(q => q.question), []);
    const randomisedAnswers = useMemo(() => props.questions.sort(() => Math.random() - 0.5).map(q => q.answer), []);

    if (props.questions.length === 0) {
        return null;
    }

    function onQuestionClicked(index: number): void {
        setQuestionIndex(index);
        resolveIsCorrectAnswer(index, answerIndex);
    }

    function onAnswerClicked(index: number): void {
        setAnswerIndex(index);
        resolveIsCorrectAnswer(questionIndex, index);
    }

    function resolveIsCorrectAnswer(qIndex: number, aIndex: number): void {
        const originalQuestionIndex = props.questions.findIndex(q => q.question === randomisedQuestions[qIndex]);
        const originalAnswerIndex = props.questions.findIndex(q => q.answer === randomisedAnswers[aIndex]);

        if (originalQuestionIndex === originalAnswerIndex) {
            const newCorrectQuestions = [...correctQuestions];
            newCorrectQuestions.push(props.questions[originalQuestionIndex]);
            setCorrectQuestions(newCorrectQuestions);
            setQuestionIndex(-1);
            setAnswerIndex(-1);
        }
    }

    return (
        <Container>
            <Container className="text-lg font-bold">Questions</Container>
            <Container className="space-y-4">
                {randomisedQuestions.map((question, index) => {
                    const answer = randomisedAnswers[index];

                    const isQuestionCorrect = correctQuestions.some(q => q.question === question);
                    const isAnswerCorrect = correctQuestions.some(q => q.answer === answer);

                    const isIncorrectStyle = questionIndex !== -1 && answerIndex !== -1 && !isQuestionCorrect;

                    const questionStyle = isQuestionCorrect
                        ? "text-green-400"
                        : index === questionIndex
                            ? isIncorrectStyle
                                ? "text-red-400"
                                : "text-blue-400"
                            : "cursor-pointer";
                    const answerStyle = isAnswerCorrect
                        ? "text-green-400"
                        : index === answerIndex
                            ? isIncorrectStyle
                                ? "text-red-400"
                                : "text-blue-400"
                            : "cursor-pointer";

                    const baseTextStyle = "text-xl ";

                    return (
                        <div key={question} className="grid grid-cols-2">
                            <span className={baseTextStyle + questionStyle} onClick={() => onQuestionClicked(index)}>{question}</span>
                            <span className={baseTextStyle + answerStyle} onClick={() => onAnswerClicked(index)}>{answer}</span>
                        </div>
                    )
                })}
            </Container>
        </Container>
    )
}