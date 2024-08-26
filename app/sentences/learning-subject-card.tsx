import React from "react";
import { Container } from "../common/container";
import { Translation, TranslationLanguage } from "../common/translation";
import { ILearningSubject } from "./sentences";

interface ILearningSubjectCardProps {
    learningSubject: ILearningSubject
    onPress: () => void;
}

export function LearningSubjectCard(props: ILearningSubjectCardProps) {
    return (
        <Container className="my-2 p-4 rounded-xl shadow-md dark:bg-gray-800 bg-white">
            <div className="cursor-pointer" onClick={props.onPress}>
                <Translation language={TranslationLanguage.Thai} size="large">{props.learningSubject.topic}</Translation>
            </div>
        </Container>
    )
}