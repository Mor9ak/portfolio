import React from 'react';
import Article from '../widgets/Article';
import artData from '../shared/jsonVault/article.json'

const ArticleHolder = () => {
    return (
        <main className={'flex flex-col'}>
            {artData.articles.map((article) => (
                <Article key={article.title} title={article.title} text={article.text} buttons={article.buttons} />
            ))}
        </main>
    )
}

export default ArticleHolder;