import React from "react";
import { ProcessTranslations } from "./translations";
import { FlatList } from "react-native"
import { SearchListItem } from "./SearchListItem";

interface ISearchListProps {
    searchQuery: string | undefined;
}

export function SearchList(props: ISearchListProps) {
    const processedTranslations = ProcessTranslations()

    return (
        <FlatList
            data={processedTranslations
                .filter(translation => translation.thai.length !== 0
                    && (!props.searchQuery || translation.english.includes(props.searchQuery)))}
            renderItem={t => <SearchListItem key={t.index} item={t} />}
        />
    );
}