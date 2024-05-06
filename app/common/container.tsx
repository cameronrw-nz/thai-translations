export function Container(props: { children: React.ReactNode, className?: string }) {
    return (
        <div className={"flex flex-col " + props.className}>
            {props.children}
        </div>
    );
}