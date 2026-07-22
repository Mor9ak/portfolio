import Button from "../shared/Button";

interface ButtonProps {
    buttonText: string;
    ButtonUrl: string;
}

interface ArtInfo {
    title: string;
    text: string;
    buttons: ButtonProps[];
}

const Article = (props: ArtInfo) => {
    return (
        <article className={"[&>*]:text-textCol bg-bgArticle flex flex-col w-fit max-w-full md:max-w-md m-5 p-2 rounded-lg *:m-3 self-start "}>
            <h2 className={"text-2xl flex items-center justify-center"}>{props.title}</h2>
            <p className={"flex items-center justify-center px-6 text-wrap"}>{props.text}</p>
            <div id={"buttonSec"} className={"flex flex-wrap items-center justify-around *:rounded-lg *:text-textCol"}>
                {props.buttons.map((button: ButtonProps) => (
                    <Button key={button.buttonText} title={button.buttonText} link={button.ButtonUrl} />
                ))}
            </div>
        </article>
    )
}
export default Article;