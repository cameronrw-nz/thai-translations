import React from "react";
import { Appbar } from "react-native-paper";

interface ITitleBarProps {
    onBack?: () => void;
}

export function TitleBar(props: ITitleBarProps) {
    return (
        <Appbar.Header>
            {props.onBack && <Appbar.BackAction onPress={props.onBack} />}
            <Appbar.Content title="Learn Thai" />
            <Appbar.Action icon="abugida-thai" onPress={() => { }} />
        </Appbar.Header>
    )
}