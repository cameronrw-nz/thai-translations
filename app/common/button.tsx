interface IButtonProps {
    children?: React.ReactNode;
    isPrimary?: boolean;
    onClick: () => void;
    text?: string;
}

export default function Button(props: IButtonProps) {
    const primaryButtonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    const secondaryButtonStyle = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";

    const buttonStyle = props.isPrimary ? primaryButtonStyle : secondaryButtonStyle;
    return (
        <button
            className={buttonStyle}
            onClick={props.onClick}
        >
            {props.text || props.children}
        </button>
    );
}