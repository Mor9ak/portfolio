interface buttonProps {
    link: string;
    title: string;
}

const Button = (props : buttonProps) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className={"p-3 rounded-lg shadow-xl/30 cursor-pointer"}>
            {props.title}
        </a>
    )
}
export default Button;