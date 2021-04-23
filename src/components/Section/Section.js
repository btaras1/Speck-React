import React from 'react';
import './Section.scss';

const Section = ({
    children,
    title,
    withoutTopPadding
}) => {
    const sectionClassName = withoutTopPadding ? 'Section Section_topPadding_none' : 'Section';
    return (
        <section className={sectionClassName}>
            {title && <h2 className="Section-Title">{title}</h2>}
            { children}
        </section>
    );
}
export default Section;