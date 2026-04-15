import React from 'react';
import Article from '../widgets/Article';
import artData from '../shared/jsonVault/article.json'
import Section from "../widgets/Section";
import encSecData from '../shared/jsonVault/encrySection.json'
import pasPowSecData from '../shared/jsonVault/passPowerSection.json'

const App = () => {
    return (
        <div className={"h-full w-full flex justify-center items-center flex-col md:flex-row"}>
            <Article title={artData.title} text={artData.text} buttons={artData.buttons} />
            <div className={'flex flex-col items-center justify-center'}>
                <Section title={encSecData.title} description={encSecData.description} link={{title: encSecData.link.title, url: encSecData.link.url}} />
                <Section title={pasPowSecData.title} description={pasPowSecData.description} link={{title: pasPowSecData.link.title, url: pasPowSecData.link.url}}/>
            </div>
        </div>
    )
}
export default App;