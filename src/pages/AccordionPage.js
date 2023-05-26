import Accordion from '../components/Accordion';

function AccordionPage() {

    const items = [
        {
            id: 'asdasda',
            label: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            id:'asdasdasd',
            label: 'What is React?',
            content: 'React is a front end javascript framework. You can use it to build single page applications, or mobile apps, or desktop apps, or even VR apps. Also you can use it to build single page applications, or mobile apps, or desktop apps, or even VR apps.'
        },
        {
            id:'asdasdasdasd',
            label: 'What is React?',
            content: 'React is a front end javascript framework. You can use it to build single page applications, or mobile apps, or desktop apps, or even VR apps.'
        }
    ]


    return <Accordion items={items } />;
}

export default AccordionPage;