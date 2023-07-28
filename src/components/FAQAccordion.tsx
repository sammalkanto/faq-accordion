import illustrationWomanDesktop from '../assets/illustration-woman-online-desktop.svg';
import illustrationBoxDesktop from '../assets/illustration-box-desktop.svg';
import illustrationBgDesktop from '../assets/bg-pattern-desktop.svg';

import illustrationWomanMobile from '../assets/illustration-woman-online-mobile.svg';
import illustrationBgMobile from '../assets/bg-pattern-mobile.svg';


import arrowIcon from '../assets/icon-arrow-down.svg';
import {useState} from "react";

const questions = [
    {
        summary: 'How many team members can I invite?',
        details: 'You can invite 8 team members.'
    },
    {
        summary: 'What is the maximum file upload size?',
        details: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
        summary: 'How do I reset my password?',
        details: 'You can reset the password by providing your email'
    },
    {
        summary: 'Can I cancel my subscription?',
        details: 'You have 3 days to get your money back after subscribing.'
    },
    {
        summary: 'Do you provide additional support?',
        details: 'Premium customers can utilize phone support 24/7. Free users can obtain help from the community hub.'
    }
];

interface AccordionItemProps {
    summary: string;
    details: string;
}

function AccordionItem({summary, details}: AccordionItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => { setIsExpanded(!isExpanded) };

    return(
        <div className='item' onClick={handleClick}>
            <div className='box'>
                <div className={`summary ${isExpanded ? 'expanded' : ''}`}>{summary}</div>
                <img className={`icon ${isExpanded ? 'expanded' : ''}`} src={arrowIcon}/>
            </div>
            <div className={`details ${isExpanded ? 'expanded' : ''}`}>{details}</div>
        </div>
    )
}

export default function FAQAccordion() {
    return(
        <div className='card'>
            <div className='media'>
                <img className='illustration desktop woman' src={illustrationWomanDesktop}/>
                <img className='illustration desktop box' src={illustrationBoxDesktop}/>
                <img className='illustration desktop bg' src={illustrationBgDesktop}/>
                <img className='illustration mobile woman' src={illustrationWomanMobile}/>
                <img className='illustration mobile bg' src={illustrationBgMobile}/>
            </div>
            <div className='content'>
                <h1 className="title">FAQ</h1>
                <div className='accordion'>
                    {questions.map((item, i) => {
                        const items = [<AccordionItem summary={item.summary} details={item.details} />];

                        if (i%1 === 0) items.push(<div className="divider"/>)

                        return items;
                    })}
                </div>
            </div>
            
        </div>
    )
}