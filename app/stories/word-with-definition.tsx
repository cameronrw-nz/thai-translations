import React from "react";
import { ITranslation } from "../common/translations";

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
        <span
            onClick={props.wordWithDefinitions.translation ? () => props.onPress() : undefined}
            className={"text-2xl" + (props.wordWithDefinitions.translation ? " text-blue-500 cursor-pointer hover:text-yellow-500 " : "")}
        >
            {props.wordWithDefinitions.word}
        </span>
    )
}
