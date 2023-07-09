import React from "react";
import { Appbar, List, Searchbar } from "react-native-paper";
import { Translations } from "./translations";
import { Text, FlatList, StyleSheet, View } from "react-native"
import { SearchList } from "./SearchList";
import { TitleBar } from "./TitleBar";

interface ITranslation {
    english: string;
    thai: string;
    sentence: string;
    words: string[];
}

export function Content() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
            <TitleBar />
            <View style={styles.container}>

                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.search}
                />
                <SearchList searchQuery={searchQuery} />
            </View >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    search: {
        marginBottom: 10
    }
});
