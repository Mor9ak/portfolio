import React from 'react';
import Button from "../shared/Button";

interface SectionProps {
    title: string;
    description: string;
    link: {
        url: string;
        title: string;
    }
}

const Section = (props : SectionProps) => {
    return (
        <section className={"[&>*]:text-textCol bg-bgArticle flex flex-col w-fit m-5 p-2 rounded-lg *:m-3 self-start"}>
            <h2 className={'text-2xl text-center'}>{props.title}</h2>
            <div className={'flex flex-row justify-between'}>
                <p>{props.description}</p>
                <Button link={props.link.url} title={props.link.title} />
            </div>
        </section>
    );
}

export default Section;