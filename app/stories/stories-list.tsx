"use client"
import React, { useState } from "react";
import { IStory, IStoryGroup, ProcessStories } from "./stories";
import { StoryCard } from "./story-card";
import { StoryView } from "./story-view";
import { Container } from "../common/container";
import { StoryDashboard } from "./story-dashboard";

const storyGroups: IStoryGroup[] = ProcessStories();

export function StoriesList() {
    const [story, setStory] = useState<IStory>();

    return (
        <Container className="overflow-hidden">
            {!story && <StoryDashboard storyGroups={storyGroups} onClick={setStory} />}
            {story && <StoryView story={story} onPress={() => setStory(undefined)} />}
        </Container>
    )
}
