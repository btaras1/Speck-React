import ImageDesign from '../../assets/images/design.jpg';
import ImageDevelopment from '../../assets/images/development.jpg';
import ImageMarketing from '../../assets/images/marketing.jpg';
 
const eventsMock = [
    {
        id: 1,
        imageUrl: ImageDesign,
        imageAlt: 'UX/UI design workshop',
        title: 'UX/UI design workshop',
        shortDescription: 'Learn how to solve big problems and test new ideas based on Google Sprint methodology...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?',
        isFeatured: true,
        location: 'Hodnik FOI-a',
        dateTime: '14.10. (9:00-16:00h)',
        availability: '15/60',
        company: 'Speck'
    },
    {
        id: 2,
        imageUrl: ImageDevelopment,
        imageAlt: 'Frontend best practices',
        title: 'Frontend best practices',
        shortDescription: 'Best frontend practices for developers. Learn advanced CSS techniques and much more...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?',
        isFeatured: true,
        location: 'Parkić',
        dateTime: '16.10. (12:00-16:00h)',
        availability: '50/60',
        company: 'Five'
    },
    {
        id: 3,
        imageUrl: ImageMarketing,
        imageAlt: 'Digital marketing workshop',
        title: 'Digital marketing workshop',
        shortDescription: 'Learn how to use Google Ads and social networks to gain customers for your digital product...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?',
        isFeatured: true,
        location: 'Šumica 18',
        dateTime: '18.10. (16:00-18:00h)',
        availability: '5/60',
        company: 'Degordian'
    },
    {
        id: 4,
        imageUrl: ImageDevelopment,
        imageAlt: 'Frontend vs backend',
        title: 'Frontend vs backend',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?',
        isFeatured: false,
        location: 'Hodnik FOI-a',
        dateTime: '14.10. (9:00-16:00h)',
        availability: '15/60',
        company: 'Speck'
    },
    {
        id: 5,
        imageUrl: ImageMarketing,
        imageAlt: 'Social media marketing',
        title: 'Social media marketing',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?',
        isFeatured: false,
        location: 'Parkić',
        dateTime: '16.10. (12:00-16:00h)',
        availability: '54/60',
        company: 'MPR'
    },
    {
        id: 6,
        imageUrl: ImageMarketing,
        imageAlt: 'Lean startup drill',
        title: 'Lean startup drill',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?',
        isFeatured: false,
        location: 'Šumica 18',
        dateTime: '15.10. (16:00-18:00h)',
        availability: '60/60',
        company: 'Lean Startup Croatia'
    },
    {
        id: 7,
        imageUrl: ImageDevelopment,
        imageAlt: 'Node.js is better than PHP?',
        title: 'Node.js is better than PHP?',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?',
        isFeatured: false,
        location: 'Hodnik FOI-a',
        dateTime: '12.10. (9:00-16:00h)',
        availability: '15/60',
        company: 'Speck'
    },
    {
        id: 8,
        imageUrl: ImageMarketing,
        imageAlt: 'Google Ads campaigns',
        title: 'Google Ads campaigns',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur voluptates quibusdam, magnam aliquam quasi natus officiis, ipsum mollitia temporibus magni earum, repellat at quia asperiores reprehenderit adipisci. Iure, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur odio vero quis neque ullam! Odio alias voluptatum maxime excepturi perspiciatis sequi distinctio, quisquam ab aliquid! Est, sit nostrum! Consectetur?',
        isFeatured: false,
        location: 'Parkić',
        dateTime: '16.10. (12:00-16:00h)',
        availability: '50/60',
        company: 'Agency04'
    },
];

export default eventsMock;