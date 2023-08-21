import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { IStory } from "./stories";
import { StoryLine } from "./StoryLine";
import { ITranslation } from "../translations";
import { TranslationToShow } from "./TranslationToShow";

interface IStoryViewProps {
    story: IStory
    onPress: () => void;
}

export function StoryView(props: IStoryViewProps) {
    const [translationToShow, setTranslationToShow] = useState<ITranslation | undefined>();

    return (
        <View style={styles.container}>
            <View style={styles.storyView}>
                <Text style={styles.title}>{props.story.title}</Text>
                {props.story.paragraphs.map(paragraph => {
                    console.log(paragraph)
                    return (
                        <View key={paragraph[0].sentences[0]} style={styles.storyView}>
                            {paragraph.map(line => {
                                return (
                                    <View key={line.sentences[0]} style={styles.line}>
                                        <StoryLine
                                            sentences={line.sentences}
                                            words={line.words}
                                            onTranslationSelected={t => setTranslationToShow(t)}
                                        />
                                    </View>
                                )
                            })}
                        </View>
                    );
                })}
            </View>
            <TranslationToShow translation={translationToShow} onPress={() => setTranslationToShow(undefined)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#fff',
        padding: 10,
    },
    storyView: {
        flex: 1,
        overflow: "scroll",
        display: "flex"
    },
    paragrpah: {
        padding: 0,
    },
    line: {
        display: "flex",
        flexDirection: "row"
    },
    text: {
        fontSize: 30,
        marginRight: 10
    },
    title: {
        fontSize: 40,
        marginBottom: 20,
        color: "grey"
    }
});
