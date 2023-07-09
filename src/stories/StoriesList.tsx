import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ITranslation, ProcessTranslations } from "../translations";
import { IStory, ProcessStories } from "./stories";
import { StoryCard } from "./StoryCard";
import { StoryView } from "./StoryView";
import { TitleBar } from "../TitleBar";
const stories = ProcessStories();

export function StoriesList() {
    const [story, setStory] = useState<IStory>();


    return (
        <>
            <TitleBar onBack={story ? () => setStory(undefined) : undefined} title="Stories" />
            <View style={styles.container}>

                {!story && stories.map(story => {
                    return (
                        <StoryCard key={story.title} story={story} onPress={() => setStory(story)} />
                    )
                })}
                {story && <StoryView story={story} onPress={() => setStory(undefined)} />}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    header: {
        fontSize: 50
    },
    translation: {
        fontSize: 20,
        color: "grey"
    }
});
