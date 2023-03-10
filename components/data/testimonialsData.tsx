import { FormattedHTMLMessage } from "../atoms/FormattedMessage"

// export const TestimonialsData = [
//     {
//         img1: '/images/testimonials/sascha.png',
//         logo1: '',
//         // description1: 'Understanding Fintech is difficult, successful investments even more. The Platinum team is working hard to fill this gap, making crypto more accessible for everyone! Iām excited to see this baby growing.',
//         description1: <FormattedHTMLMessage id='page.home.testimonials.JoshFeedback' />, 
//         shortName1: 'Sascha',
//         company1: 'Sascha | Felix',

//         img2: '/images/testimonials/josh.png',
//         logo2: '',
//         // description2: 'The Platinum team has been nothing but fantastic to work with. Their team of developers has years of experience building Web3 applications, and it shows in their products. They have helped Contango Digital Assets with introductions to other players in the space, and for that we are forever grateful.',
//         description2: <FormattedHTMLMessage id='page.home.testimonials.JoshFeedback' />,
//         shortName2: 'Josh',
//         company2: 'Contango Ventures Inc',
//     },
//     {
//         img1: '/images/testimonials/michael.png',
//         logo1: '',
//         // description1: 'Tokenomik has a long-standing relationship with Platinum, given their reputation of incubating and launching tier 1 blockchain projects. Their technical skills and project management abilities make them a perfect partner and we eagerly await the launch of Platinum, of which Tokenomik is an early supporter.',
//         description1: <FormattedHTMLMessage id='page.home.testimonials.MishaFeedback' />, 
//         shortName1: 'éåē¾ Michael',
//         company1: 'Tokenomik',

//         img2: '/images/testimonials/siwon.png',
//         logo2: '',
//         description2: <FormattedHTMLMessage id='page.home.testimonials.SiwonKimFeedback' />,
//         // 'Antony and the team are highly knowledgeable, proficient, and professional. Any feedback from our side was immediately reflected, and I could tell that Antony especially takes all feedback genuinely to his heart. I highly recommend Antony and the team as advisors and partners in any development needs!',
//         shortName2: 'Siwon Kim',
//         company2: 'KSM Starter',
//     },
//     {
//         img1: '/images/testimonials/sundeep.png',
//         logo1: '',
//         description1: <FormattedHTMLMessage id='page.home.testimonials.SundeepFeedback' />,
//         // 'The team at Platinum (team behind Marnotaur and Cheesus) are a high performing group of individuals focused on bringing innovative solutions to the masses. I have seen them work closely as an advisor to the above mentioned projects, and I am truly impressed by their attention to detail and laser focused worth ethic!',
//         shortName1: 'Sundeep',
//         company1: 'Sundeep',

//         img2: '/images/testimonials/richard.png',
//         logo2: '',
//         description2: <FormattedHTMLMessage id='page.home.testimonials.RichardFeedback' />,
//         // 'Being part of Platinum has illustrated to me what real prospects look like. As a partner and sincere advisor, Iām helping the team to reach out to as many people as possible - they deserve it.',
//         shortName2: 'Richard Asamoah Boateng',
//         company2: 'R-930 CAPITAL',
//     },
//     {
//         img1: '/images/testimonials/thomas.png',
//         logo1: '',
//         description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackThomas' />,
//         // 'I am very happy to be involved in the Platinum project. During the working process, I see the team`s efforts and determination. The tools that Platinum bring to users are handy and potential; I think it will be popular in the future, especially very necessary for users. I highly recommend the Platinum team as they are very professional and hard working. As a mentor and partner, I will be here to help them succeed even more.',
//         shortName1: 'Thomas Nguyį»n',
//         company1: 'AZCOINVEST',

//         img2: '/images/testimonials/yuen.png',
//         logo2: '',
//         description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackYuen' />,
//         // 'I was delighted when I knew I had the chance to help this project as it uses innovative solutions to resolve a real pain point in the world of Fintech. Platinum can really help us to  tell the good from the bad.',
//         shortName2: 'Yuen',
//         company2: 'Labsgroup',
//     },
//     {
//         img1: '/images/testimonials/persio.png',
//         logo1: '',
//         description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackPersio' />,
//         // 'It was great to work with your team, pass confidence, respond quickly, everything done correctly and with deadlines. We will negotiate again with certainty.',
//         shortName1: 'Persio Flexa',
//         company1: 'Gimmer',

//         img2: '/images/testimonials/akshay.png',
//         logo2: '',
//         description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackAkshay' />,
//         // 'Your team has been extremely responsive, but more importantly in the crypto space, you are one of the few teams that delivers what is promised. We look forward to working together in the future too',
//         shortName2: 'Akshay Mehra',
//         company2: 'CEO, Co-Founder',
//     },
//     {
//         img1: '/images/testimonials/rinat.png',
//         logo1: '',
//         description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackRinat' />,
//         // 'Everything was great! We had a 100% service for Okex! Platinum listing was efficient, solid and super helpful!',
//         shortName1: 'Rinat Arslanov',
//         company1: 'CEO',

//         img2: '/images/testimonials/alexey.png',
//         logo2: '',
//         description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackAlexey' />,
//         // 'Platinum team is great, they proved themselves as first-class professionals in what they do. Our token was listed right on time, and more than that, they booked for us exactly the date we wanted. We highly recommend the service!',
//         shortName2: 'Alexey Shmonov',
//         company2: 'HOQU CEO and Co-founder',
//     },
//     {
//         img1: '/images/testimonials/rachel.png',
//         logo1: '',
//         description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackRachel' />,
//         // 'We worked with Platinum after our token sale. They swiftly helped us get in touch with the exchange of our choice and delivered obviously successful results. They provided sound guidance befitting to our scale. Thank you.',
//         shortName1: 'Rachel Chung',
//         company1: 'ATFS',

//         img2: '/images/testimonials/pei-han.png',
//         logo2: '',
//         description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackPei' />,
//         // 'MarketMaking Listing provides professional and responsive assistance on listing and post ico marketing. They are always around the clock solving and replying to our questions.',
//         shortName2: 'Pei-Han Chuang',
//         company2: 'Morpheus Labs',
//     },
//     {
//         img1: '/images/testimonials/eric.png',
//         logo1: '',
//         description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackEric' />,
//         // 'Dan and Drew`s team is very professional and efficient, making the process smooth and easy.',
//         shortName1: 'Eric Zhang',
//         company1: 'TrueChain',
//         //no photo
//         // img2: '/images/testimonials/defoltImage.webp',
//         // logo2: '/images/testimonials/logos/logo0.png',
//         // description2: 'We are really satisfied with responsiveness and professionalism given us by Platinum during its listing operations. Their constant guidance, supervision, and support qualified us to work under the best conditions',
//         // shortName2: 'Simone Costa',
//         // company2: 'Multiversum Foundation',
//     },
// ]

export const TestimonialsData = [
    {
        img1: '/images/testimonials/sascha.png',
        logo1: '',
        description1: <FormattedHTMLMessage id='page.home.testimonials.JoshFeedback' />, 
        shortName1: 'Sascha',
        company1: 'Sascha | Felix',

        img2: '/images/testimonials/michael.png',
        logo2: '',
        description2: <FormattedHTMLMessage id='page.home.testimonials.MishaFeedback' />, 
        shortName2: 'éåē¾ Michael',
        company2: 'Tokenomik',
    },
    {
        img1: '/images/testimonials/siwon.png',
        logo1: '',
        description1: <FormattedHTMLMessage id='page.home.testimonials.SiwonKimFeedback' />,
        shortName1: 'Siwon Kim',
        company1: 'KSM Starter',

        img2: '/images/testimonials/sundeep.png',
        logo2: '',
        description2: <FormattedHTMLMessage id='page.home.testimonials.SundeepFeedback' />,
        shortName2: 'Sundeep',
        company2: 'Sundeep',
    },
    {
        img1: '/images/testimonials/richard.png',
        logo1: '',
        description1: <FormattedHTMLMessage id='page.home.testimonials.RichardFeedback' />,
        shortName1: 'Richard Asamoah Boateng',
        company1: 'R-930 CAPITAL',

        img2: '/images/testimonials/thomas.png',
        logo2: '',
        description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackThomas' />,
        shortName2: 'Thomas Nguyį»n',
        company2: 'AZCOINVEST',
    },
    {
        img1: '/images/testimonials/yuen.png',
        logo1: '',
        description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackYuen' />,
        shortName1: 'Yuen',
        company1: 'Labsgroup',

        img2: '/images/testimonials/persio.png',
        logo2: '',
        description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackPersio' />,
        shortName2: 'Persio Flexa',
        company2: 'Gimmer',
    },
    {
        img1: '/images/testimonials/akshay.png',
        logo1: '',
        description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackAkshay' />,
        shortName1: 'Akshay Mehra',
        company1: 'CEO, Co-Founder',

        img2: '/images/testimonials/rinat.png',
        logo2: '',
        description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackRinat' />,
        shortName2: 'Rinat Arslanov',
        company2: 'CEO',
    },
    {
        img1: '/images/testimonials/alexey.png',
        logo1: '',
        description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackAlexey' />,
        shortName1: 'Alexey Shmonov',
        company1: 'HOQU CEO and Co-founder',

        img2: '/images/testimonials/rachel.png',
        logo2: '',
        description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackRachel' />,
        shortName2: 'Rachel Chung',
        company2: 'ATFS',
    },
    {
        img1: '/images/testimonials/pei-han.png',
        logo1: '',
        description1: <FormattedHTMLMessage id='page.home.testimonials.feedbackPei' />,
        shortName1: 'Pei-Han Chuang',
        company1: 'Morpheus Labs',

        img2: '/images/testimonials/eric.png',
        logo2: '',
        description2: <FormattedHTMLMessage id='page.home.testimonials.feedbackEric' />,
        shortName2: 'Eric Zhang',
        company2: 'TrueChain',
    }
]

export const TestimonialsMobileData = [
    {
        img: '/images/testimonials/sascha.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.SaschaFeedback' />,
        shortName: 'Sascha',
        company: 'Sascha | Felix',
    },
    // {
    //     img: '/images/testimonials/josh.png',
    //     logo: '',
    //     description: <FormattedHTMLMessage id='page.home.testimonials.JoshFeedback' />,
    //     // 'The Platinum team has been nothing but fantastic to work with. Their team of developers has years of experience building Web3 applications, and it shows in their products. They have helped Contango Digital Assets with introductions to other players in the space, and for that we are forever grateful.',
    //     shortName: 'Josh',
    //     company: 'Contango Ventures Inc',
    // },
    {
        img: '/images/testimonials/michael.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.MishaFeedback' />,
        shortName: 'éåē¾ Michael',
        company: 'Tokenomik',
    },
    {
        img: '/images/testimonials/siwon.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.SiwonKimFeedback' />,
        shortName: 'Siwon Kim',
        company: 'KSM Starter',
    },
    {
        img: '/images/testimonials/sundeep.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.SundeepFeedback' />,
        shortName: 'Sundeep',
        company: 'Sundeep',
    },
    {
        img: '/images/testimonials/richard.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.RichardFeedback' />,
        shortName: 'Richard Asamoah Boateng',
        company: 'R-930 CAPITAL',
    },
    {
        img: '/images/testimonials/thomas.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackThomas' />,
        shortName: 'Thomas Nguyį»n',
        company: 'AZCOINVEST',
    },
    {
        img: '/images/testimonials/yuen.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackYuen' />,
        shortName: 'Yuen',
        company: 'Labsgroup',

    },
    {
        img: '/images/testimonials/persio.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackPersio' />,
        shortName: 'Persio Flexa',
        company: 'Gimmer',

    },
    {
        img: '/images/testimonials/akshay.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackAkshay' />,
        shortName: 'Akshay Mehra',
        company: 'CEO, Co-Founder',

    },
    {
        img: '/images/testimonials/rinat.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackRinat' />,
        shortName: 'Rinat Arslanov',
        company: 'CEO',

    },
    {
        img: '/images/testimonials/alexey.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackAlexey' />,
        shortName: 'Alexey Shmonov',
        company: 'HOQU CEO and Co-founder',

    },
    {
        img: '/images/testimonials/rachel.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackRachel' />,
        shortName: 'Rachel Chung',
        company: 'ATFS',
    },
    {
        img: '/images/testimonials/pei-han.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackPei' />,
        shortName: 'Pei-Han Chuang',
        company: 'Morpheus Labs',
    },
    {
        img: '/images/testimonials/eric.png',
        logo: '',
        description: <FormattedHTMLMessage id='page.home.testimonials.feedbackEric' />,
        shortName: 'Eric Zhang',
        company: 'TrueChain',
    },
]

