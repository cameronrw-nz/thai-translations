import React from "react";
import { ProcessTranslations } from "../common/translations";
import { SearchListItem } from "./search-result-item";
import { Container } from "../common/container";

interface ISearchListProps {
    searchQuery: string | undefined;
}

export function SearchList(props: ISearchListProps) {
    const processedTranslations = ProcessTranslations();

    const filteredTranslations = processedTranslations
        .filter(translation => translation.thai.length !== 0
            && (!props.searchQuery || translation.english.findIndex(word => props.searchQuery && word.toLowerCase().includes(props.searchQuery.toLowerCase())) > -1))
        .sort((a, b) => a.thai[0] < b.thai[0] ? 1 : -1);

    return (
        <Container className="space-y-4 max-h-full overflow-y-auto">
            {filteredTranslations.map((translation, index) => <SearchListItem key={index} item={translation} />)}
        </Container>
    );
}