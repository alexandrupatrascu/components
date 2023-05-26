import { useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {

        /* functional update of state to prevent async issues, 
        ie if you click on the same index twice super fast, it will not close */
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        })
        
        // if (nextIndex === expandedIndex) {
        //     setExpandedIndex(-1);
        // } else {
        //     setExpandedIndex(nextIndex);
        // }
    };

    /*
    React done not print booleans, nulls or undefined
    in JS: || gives back the first truthy value
           && gives back the first falsey value or the last truthy value
    */
    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex;

        /*
        if isExpanded is true, then content will be the content of the item
        if isExpanded is false, then content will be null, hence the content will not be rendered
        */
        const content = isExpanded && <div className='border-b p-5'>{item.content}</div>;

        const icon = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
        </span>

        /*
        result of map is an array of JSX elements, each div having their own array function for each index
        once user clicks on the div, the setExpandedIndex will be called, and the index of the div will be passed in
        */
        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b iterms-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {content}
            </div>
        );
    });


    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    )
}

export default Accordion;