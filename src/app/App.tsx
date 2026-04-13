import React from 'react';
import Article from '../widgets/Article';
import artData from '../shared/jsonVault/article.json'
import Section from "../widgets/Section";
import encSecData from '../shared/jsonVault/encrySection.json'

const App = () => {
    return (
        <div className={"h-screen w-screen flex justify-center items-center"}>
            <Article title={artData.title} text={artData.text} buttonText={artData.buttonText} buttonUrl={artData.buttonUrl} button2Url={artData.button2Url} button2Text={artData.button2Text} button3Text={artData.button3Text} button3Url={artData.button3Url}/>
            <Section title={encSecData.title} description={encSecData.description} link={{title: encSecData.link.title, url: encSecData.link.url}} />
        </div>
    )
}
export default App;