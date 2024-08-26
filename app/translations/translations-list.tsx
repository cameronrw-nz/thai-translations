import React, { useEffect, useState } from "react";
import { ProcessTranslations } from "../common/translations";
import { SearchListItem } from "./search-result-item";
import { Container } from "../common/container";
import Switch from "../common/switch";
import { compareTranslations, ITranslationAnswer } from "../practice/cards";

interface ISearchListProps {
    searchQuery: string | undefined;
}

export function TranslationsList(props: ISearchListProps) {
    const [isShowingScore, setIsShowingScore] = useState<boolean>(false);
    const processedTranslations = ProcessTranslations();
    const [storageTranslations, setStorageTranslations] = useState<ITranslationAnswer[]>([]);

    useEffect(() => {
        const storageTranslations = localStorage.getItem("translations");
        if (storageTranslations) {
            setStorageTranslations(JSON.parse(storageTranslations) ?? []);
        }
    }, []);

    const filteredTranslations = processedTranslations
        .filter(translation => translation.thai.length !== 0
            && (!props.searchQuery || translation.english.findIndex(word => props.searchQuery && word.toLowerCase().includes(props.searchQuery.toLowerCase())) > -1))
        .sort((a, b) => a.thai[0] < b.thai[0] ? 1 : -1);

    const resultCountString = props.searchQuery
        ? `${filteredTranslations.length} results found out of ${processedTranslations.length}`
        : `${processedTranslations.length} total results`;

    const displayItems = filteredTranslations.map((translation, index) => {
        const storageTranslation = storageTranslations.find(t => compareTranslations(t.translation, translation));
        return (
            <SearchListItem
                key={index}
                item={translation}
                isShowingScore={isShowingScore}
                storageTranslation={storageTranslation}
            />
        )
    })

    return (
        <>
            <span>
                <i>
                    {resultCountString}
                </i>
                <Switch isChecked={isShowingScore} onChange={setIsShowingScore}>
                    Show Practice Score
                </Switch>
            </span>
            <Container className="space-y-4 max-h-full overflow-y-auto">
                {displayItems}
            </Container>
        </>
    );
}