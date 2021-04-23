import React, {useEffect} from 'react';


import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import Grid from '../../components/Grid/Grid'
import Event from '../../components/Event/Event'

// Images
import ImageDesign from '../../assets/images/design.jpg';
import ImageDevelopment from '../../assets/images/development.jpg';
import ImageMarketing from '../../assets/images/marketing.jpg';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        })
    return(
        <>
         <Hero />
        <Section title="Featured events" >
          <Grid columns="3">
          <Event 
                        image={ImageDesign}
                        title="UX/UI design workshop"
                        description="Learn how to solve big problems and test new ideas based on Google Sprint methodology..."
                        buttonText="Find out more"
                    />
                    <Event 
                        image={ImageDevelopment}
                        title="Frontend best practices"
                        description="Best frontend practices for developers. Learn advanced CSS techniques and much more..."
                        buttonText="Find out more"
                    />
                    <Event 
                        image={ImageMarketing}
                        title="Digital marketing workshop"
                        description="Lear how to use Google Ads and social networks to gain customers for your digital product..."
                        buttonText="Find out more"
                    />
          </Grid>
        </Section>
        </>
    );
}
export default Home;