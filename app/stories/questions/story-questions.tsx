import { IQuestion } from "../stories"
import { MixAndMatchQuestions } from "./mix-and-match-questions"

interface IStoryQuestionProps {
    questions: IQuestion[]
}

export function StoryQuestions(props: IStoryQuestionProps) {
    return (
        <MixAndMatchQuestions questions={props.questions} />
    )
}