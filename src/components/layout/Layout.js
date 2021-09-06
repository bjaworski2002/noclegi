export default function Layout(props) {
    return (
        <div className={"App"}>
            <div>{props.header}</div>
            <div>{props.menu}</div>
            <div>{props.content}</div>
            <div>{props.footer}</div>
        </div>
    )
}