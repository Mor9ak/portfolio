import React from 'react';
import Section from './Section';
import secData from '../shared/jsonVault/section.json';

const SectionHolder = () => {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            {secData.sections.map((section) => (
                <Section key={section.title} title={section.title} description={section.description} link={section.link} />
            ))}
        </div>
    );
}

export default SectionHolder;