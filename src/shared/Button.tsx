interface buttonProps {
    link: string;
    title: string;
}

const Button = (props : buttonProps) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer"
           className={"p-3 rounded-lg shadow-xl/30 cursor-pointer flex text-center" +
               "bg-bgArticle hover:bg-bgArticleHover items-center justify-center"}>
            {props.title}
        </a>
    )
}
export default Button;