import React from "react";
import { Container } from "../common/container";
import { Translation, TranslationLanguage } from "../common/translation";
import { ILearningSubject } from "./sentences";
import { StoryLine } from "../stories/story-line";
import Button from "../common/button";

interface ILearningSubjectDetailProps {
    learningSubject: ILearningSubject
    onPress: () => void;
}

export function LearningSubjectDetails(props: ILearningSubjectDetailProps) {
    return (
        <Container className="h-full">
            <Translation language={TranslationLanguage.Thai} size="large">{props.learningSubject.topic}</Translation>
            <Container className="overflow-auto mt-4 space-y-4">
                {props.learningSubject.groupings.map(grouping => {
                    return (
                        <Container key={grouping.groupingName} className="p-4 rounded-xl shadow-md dark:bg-gray-800 bg-white">
                            <Container className="border-solid border-b-2 border-sky-800">
                                <Translation language={TranslationLanguage.Thai} size="medium">{grouping.groupingName}</Translation>
                            </Container>
                            {grouping.sentences.map(sentence => {
                                return (
                                    <Container key={sentence.sentence} className="px-2">
                                        <StoryLine
                                            sentences={[sentence.sentence]}
                                            words={sentence.parts}
                                        />
                                    </Container>
                                )
                            })}
                            {grouping.questions.map(question => {
                                return (
                                    <Container key={question.question} className={question.question ? "my-1 p-2 rounded-xl shadow-md dark:bg-gray-900 bg-white" : "hidden"}>
                                        <Container className="px-2 ">
                                            <StoryLine
                                                sentences={[question.question]}
                                                words={question.parts}
                                            />
                                        </Container>
                                        <Container className={(question.answers.length > 0 ? "p-2 mt-2 rounded-xl shadow-md dark:bg-gray-800 bg-white" : "hidden")}>
                                            {question.answers.map(answer => {
                                                return (
                                                    <Container key={answer.answer} >
                                                        <StoryLine
                                                            sentences={[answer.answer]}
                                                            words={answer.parts}
                                                        />
                                                    </Container>
                                                )
                                            })}
                                        </Container>
                                    </Container>
                                );
                            })}
                        </Container>
                    )
                })}
            </Container>

            <Container className="my-4 w-fit">
                <Button onClick={props.onPress} isPrimary>Back</Button>
            </Container>
        </Container>
    )
}