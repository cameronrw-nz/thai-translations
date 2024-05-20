"use client"
import React, { useState } from "react";
import { IStory, IStoryGroup, ProcessStories } from "./stories";
import { StoryCard } from "./story-card";
import { StoryView } from "./story-view";
import { Container } from "../common/container";

interface IStoryDashboardProps {
    storyGroups: IStoryGroup[]
    onClick: (story: IStory) => void;
}

export function StoryDashboard(props: IStoryDashboardProps) {

    return (
        <Container className="overflow-hidden">
            {props.storyGroups.map(storyGroup => {
                return (
                    <>
                        <h1>{storyGroup.group}</h1>
                        {storyGroup.stories.map(story => {
                            return <StoryCard key={story.title} story={story} onPress={() => props.onClick(story)} />
                        })}
                    </>
                )
            })}
        </Container>
    )
}
