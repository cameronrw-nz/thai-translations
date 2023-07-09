import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ITranslation, ProcessTranslations } from "./translations";
import { TitleBar } from "./TitleBar";
const translations = ProcessTranslations();

export function Cards() {
    const [isShowingSentence, setIsShowingSentence] = useState<boolean>();
    const [isShowingTranslation, setIsShowingTranslation] = useState<boolean>();
    const [translation, setTranslation] = useState<ITranslation>(translations[Math.floor(Math.random() * translations.length)]);

    function nextTranslation() {
        setTranslation(translations[Math.floor(Math.random() * translations.length)])
        setIsShowingTranslation(false)
    }

    return (
        <>
            <TitleBar />
            <View style={styles.container}>
                <Card>
                    <Card.Content>
                        <Text style={styles.header}>{translation.thai}</Text>
                        {isShowingSentence ? <Text style={styles.translation}>{translation.sentence}</Text> : null}
                        {isShowingTranslation ? <Text style={styles.translation}>{translation.english.join(" / ")}</Text> : null}
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => setIsShowingTranslation(!isShowingTranslation)}>{isShowingTranslation ? "Hide" : "Show"}</Button>
                        <Button onPress={() => setIsShowingSentence(!isShowingSentence)} mode="outlined">Sentence</Button>
                        <Button onPress={nextTranslation}>Next</Button>
                    </Card.Actions>
                </Card>
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
