import React, { useState } from "react";
import { IStory } from "./stories";
import { StoryLine } from "./story-line";
import { TranslationToShow } from "./translation-to-show";
import { Container } from "../common/container";
import { Translation, TranslationLanguage } from "../common/translation";
import { ITranslation } from "../common/translations";

interface IStoryViewProps {
    story: IStory
    onPress: () => void;
}

export function StoryView(props: IStoryViewProps) {
    const [translationToShow, setTranslationToShow] = useState<ITranslation | undefined>();

    return (
        <Container className="overflow-auto">
            <Container className="space-y-4">
                <Translation language={TranslationLanguage.Thai} size="large">{props.story.title}</Translation>
                {props.story.paragraphs.map(paragraph => {
                    console.log(paragraph)
                    return (
                        <Container key={paragraph[0].sentences[0]} className="space-y-4">
                            {paragraph.map(line => {
                                return (
                                    <div key={line.sentences[0]} >
                                        <StoryLine
                                            sentences={line.sentences}
                                            words={line.words}
                                            onTranslationSelected={t => setTranslationToShow(t)}
                                        />
                                    </div>
                                )
                            })}
                        </Container>
                    );
                })}
            </Container>
            <TranslationToShow translation={translationToShow} onPress={() => setTranslationToShow(undefined)} />
        </Container>
    )
}