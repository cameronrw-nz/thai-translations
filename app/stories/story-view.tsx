import React from "react";
import { IStory } from "./stories";
import { StoryLine } from "./story-line";
import { Container } from "../common/container";
import { Translation, TranslationLanguage } from "../common/translation";
import Button from "../common/button";
import { StoryQuestions } from "./questions/story-questions";

interface IStoryViewProps {
    story: IStory
    onPress: () => void;
}

export function StoryView(props: IStoryViewProps) {

    return (
        <Container className="overflow-auto">
            <Container className="space-y-4 mb-4">
                <Translation language={TranslationLanguage.Thai} size="large">{props.story.title}</Translation>
                {props.story.paragraphs.map(paragraph => {
                    console.log(paragraph)
                    return (
                        <Container key={paragraph[0].sentences[0]} className="space-y-0">
                            {paragraph.map(line => {
                                return (
                                    <div key={line.sentences[0]} >
                                        <StoryLine
                                            sentences={line.sentences}
                                            words={line.words}
                                        />
                                    </div>
                                )
                            })}
                        </Container>
                    );
                })}
            </Container>

            <StoryQuestions questions={props.story.questions} />
            <Container className="my-4 w-fit">
                <Button onClick={props.onPress} isPrimary>Back</Button>
            </Container>
        </Container>
    )
}
