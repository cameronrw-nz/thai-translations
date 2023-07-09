import React from "react";
import { StyleSheet, Text } from "react-native";
import { Tooltip } from "react-native-paper";
import { ITranslation } from "../translations";

interface IWordWithDefinitionProps {
    onPress: () => void;
    wordWithDefinitions: IWordWithDefinitions
}

export interface IWordWithDefinitions {
    word: string;
    translation?: ITranslation
}

export function WordWithDefinitions(props: IWordWithDefinitionProps) {
    return (
        <Text
            onPress={props.wordWithDefinitions.translation ? () => props.onPress() : undefined}
            style={props.wordWithDefinitions.translation
                ? styles.text
                : styles.textGrey}
        >
            {props.wordWithDefinitions.word}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
    textGrey: {
        fontSize: 25,
        color: "grey"
    },
});