"use client"
import { useState } from "react";
import { Container } from "../common/container";
import { LearningSubjectCard } from "./learning-subject-card";
import { ILearningSubject, ProcessSentences } from "./sentences";
import { LearningSubjectDetails } from "./learning-subject-detail";

export function LearningSubjectsDashboard() {
    const learningSubjects: ILearningSubject[] = ProcessSentences();
    const [learningSubject, setLearningSubject] = useState<ILearningSubject>();

    let display = undefined;

    if (learningSubject) {
        display = (
            <LearningSubjectDetails learningSubject={learningSubject} onPress={() => setLearningSubject(undefined)} />
        );
    }
    else {
        display = (
            <>
                {learningSubjects.map(learningSubject => {
                    return (
                        <LearningSubjectCard key={learningSubject.topic} learningSubject={learningSubject} onPress={() => setLearningSubject(learningSubject)} />
                    )
                })}
            </>
        );
    }

    return (
        <Container className="overflow-auto">
            {display}
        </Container>
    );
}