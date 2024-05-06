import React from "react";
import { IStory } from "./stories";
import { Container } from "../common/container";
import { Translation, TranslationLanguage } from "../common/translation";

interface IStoryCardProps {
    story: IStory
    onPress: () => void;
}

export function StoryCard(props: IStoryCardProps) {
    return (
        <Container>
            <div onClick={props.onPress}>
                <div>
                    <Translation language={TranslationLanguage.Thai} size="large">{props.story.title}</Translation>
                </div>
            </div>
        </Container>
    )
}

