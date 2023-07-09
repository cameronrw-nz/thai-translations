import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, Button } from "react-native-paper";
import { ITranslation, ProcessTranslations } from "../translations";

interface ITranslationToShowProps {
    onPress?: () => void;
    translation?: ITranslation;
}

const translations = ProcessTranslations();

export function TranslationToShow(props: ITranslationToShowProps) {
    const [isShowingSentences, setIsShowingSentences] = useState<boolean>()
    if (!props.translation) {
        return null;
    }

    let sentences: string[] = [];

    translations.forEach(translation => {
        if (props.translation?.thai.find(word => translation.words.includes(word)) !== undefined) {
            sentences.push(translation.sentence);
        }
    })

    console.log(sentences)



    return (
        <View style={styles.container}>
            <Card>
                <Card.Content>
                    <Text style={styles.text} onPress={props.onPress}>
                        {props.translation.english.join(" / ")}
                    </Text>
                </Card.Content>
                <Card.Content>
                    {isShowingSentences && sentences.map(sentence => {
                        return (
                            <Text style={styles.sentences}>
                                {sentence}
                            </Text>
                        )
                    })}
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => setIsShowingSentences(true)}>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "lightgrey",
        paddingTop: 10
    },
    text: {
        fontSize: 30,
        marginRight: 10
    },
    sentences: {
        fontSize: 20,
        marginRight: 10
    },
});
