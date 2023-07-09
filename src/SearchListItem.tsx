import React from "react";
import { Text, View, StyleSheet, ListRenderItemInfo } from "react-native"
import { ITranslation } from "./translations";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        verticalAlign: "bottom"
    },
    item: {
        fontSize: 30,
        height: 40,
        flex: 1,
        verticalAlign: "bottom"
    },
    translation: {
        padding: 10,
        fontSize: 20,
    }
});

interface ISearchListItemProps {
    item: ListRenderItemInfo<ITranslation>
}

export function SearchListItem(props: ISearchListItemProps) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.item}
            >
                {props.item.item.thai.join(" / ")}
            </Text>
            <Text
                style={styles.translation}
            >
                {props.item.item.english.join(" / ")}
            </Text>
        </View>
    );
}