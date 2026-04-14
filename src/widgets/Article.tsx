import Button from "../shared/Button";

interface ArtInfo {
    title: string;
    text: string;
    buttonText: string;
    buttonUrl: string;
    button2Text?: string;
    button2Url?: string;
    button3Text?: string;
    button3Url?: string;
}

const Article = (props: ArtInfo) => {
    return (
        <article className={"[&>*]:text-textCol bg-bgArticle flex flex-col w-fit m-5 p-2 rounded-lg *:m-3 self-start max-w-md"}>
            <h2 className={"text-2xl flex items-center justify-center"}>{props.title}</h2>
            <p className={"flex items-center justify-center px-6"}>{props.text}</p>
            <div id={"buttonSec"} className={"flex items-center justify-around *:rounded-lg *:text-textCol"}>
                <Button title={props.buttonText} link={props.buttonUrl}/>
                {props.button2Text !== undefined && props.button2Url !== undefined && (
                    <Button title={props.button2Text} link={props.button2Url} />
                )}
                {props.button3Text !== undefined && props.button3Url !== undefined && (
                    <Button title={props.button3Text} link={props.button3Url} />
                )}
            </div>
        </article>
    )
}
export default Article;