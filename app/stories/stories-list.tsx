"use client"
import React, { useState } from "react";
import { IStory, ProcessStories } from "./stories";
import { StoryCard } from "./story-card";
import { StoryView } from "./story-view";
import { Container } from "../common/container";

const stories = ProcessStories();

export function StoriesList() {
    const [story, setStory] = useState<IStory>();

    return (
        <Container className="overflow-hidden">
            {!story && stories.map(story => {
                return (
                    <StoryCard key={story.title} story={story} onPress={() => setStory(story)} />
                )
            })}
            {story && <StoryView story={story} onPress={() => setStory(undefined)} />}
        </Container>
    )
}
