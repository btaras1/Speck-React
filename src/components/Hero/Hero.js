import React from 'react';
import {
    SectionHero,
    Overlay,
    Content,
    Heading,
    Subheading
} from './HeroStyle'

const Hero = () => {
    return (
        <SectionHero>
            <Overlay>
                <Content>
                    <Heading>Centar za podršku studentima i razvoj karijera</Heading>
                    <Subheading>CPSRK aktivno radi na poboljšanju kvalitete cjelokupnog iskustva studiranja za studente i studentice FOI-ja na način da ih podržava, motivira i karijerno usmjerava. Svojim aktivnostima pomaže im kako bi se uspješno nosili s akademskim
                    izazovima, napredovali kroz studij i počeli graditi svoju karijeru već tijekom studentskih dana.</Subheading>
                </Content>
            </Overlay>
        </SectionHero>
    );
}

export default Hero;