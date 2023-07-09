import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ITranslation, ProcessTranslations } from "../translations";
import { IStory, ProcessStories } from "./stories";

interface IStoryCardProps {
    story: IStory
    onPress: () => void;
}

export function StoryCard(props: IStoryCardProps) {
    return (
        <View style={styles.container}>
            <Card onPress={props.onPress}>
                <Card.Content>
                    <Text style={styles.header}>{props.story.title}</Text>
                </Card.Content>
            </Card>
        </View>
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
