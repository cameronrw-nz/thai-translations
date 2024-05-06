interface IButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
    text?: string;
}

export default function Button(props: IButtonProps) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={props.onClick}
        >
            {props.text || props.children}
        </button>
    );
}