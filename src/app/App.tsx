import React from 'react';
import ArticleHolder from "../widgets/ArticleHolder";
import SectionHolder from "../widgets/SectionHolder";

const App = () => {
    return (
        <div className={"h-full w-full flex justify-center flex-col md:flex-row"}>
            <ArticleHolder />
            <SectionHolder />
        </div>
    )
}
export default App;