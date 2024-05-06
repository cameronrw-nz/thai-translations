import React from "react";
import { IWordWithDefinitions, WordWithDefinitions } from "./word-with-definition";
import { ITranslation, ProcessTranslations } from "../common/translations";

interface ISentenceProps {
    sentences: string[];
    words: string[];
    onTranslationSelected: (t?: ITranslation) => void;
}

const translations = ProcessTranslations();

export function StoryLine(props: ISentenceProps) {
    const sentencesWithDefinitions: IWordWithDefinitions[][] = []

    let wordIndex: number = 0;

    props.sentences.forEach(sentence => {
        const wordsWithDefinitions: IWordWithDefinitions[] = [];

        let word = "";
        while (sentence.length > 0) {
            const wordFromList = props.words[wordIndex]
            if (sentence.startsWith(wordFromList)) {
                if (word.length > 0) {
                    wordsWithDefinitions.push({
                        word
                    })
                    word = "";
                }

                const translation = translations.find(t => t.thai.includes(wordFromList));

                wordsWithDefinitions.push({
                    word: wordFromList,
                    translation
                })

                wordIndex++;

                sentence = sentence.slice(wordFromList.length, sentence.length)
            }
            else {
                word += sentence[0]
                sentence = sentence.slice(1, sentence.length)
            }
        }

        if (word.length) {
            wordsWithDefinitions.push({
                word
            })
        }

        sentencesWithDefinitions.push(wordsWithDefinitions);
    })

    return (
        <>
            {sentencesWithDefinitions.map(sentenceWithDefinition => {
                return (
                    <div key={Math.random()}>
                        {sentenceWithDefinition.map(wordWithDefinitions => {
                            return (
                                <WordWithDefinitions
                                    key={Math.random()}
                                    wordWithDefinitions={wordWithDefinitions}
                                    onPress={() => props.onTranslationSelected(wordWithDefinitions.translation)} />
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}