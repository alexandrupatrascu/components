import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  // only run this effect once, when the component is first rendered
  useEffect(() => { 
    const handler = (event) => { 
      /* if we did not assigned that ref to any el
       return early*/
      if (!divEl.current) {
        return;
      }
      /* if the user clicks outside the dropdown, close the dropdown
        divEl.current gives us a reference to the root div of our dropdown
        event.target is the element that the user clicked on
        we want to check if the user clicked on the root div or any of its children
      */
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // add an event listener to the document to listen for clicks during the capture phase
    document.addEventListener('click', handler, true);

    /* 
    return a cleanup function to remove the event listener
    behavior when the second argument is an empty array []: 
      - component gets rendered, useEffect runs, we return a cleanup function
      - component is removed from the DOM, cleanup function runs, we remove the event listener
    */
    return () => { 
      document.removeEventListener('click', handler);
    }
  },[]);


  const handleClick = () => {
    // toggle the isOpen state when the user clicks on the div
    // if isOpen is true, then setIsOpen(false)
    setIsOpen(!isOpen);
  };

  // once option is clicked, close the dropdown
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      // using a wrapped arrow function to pass in the option, so each div will have its own function
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  /* if selection is null, then return 'Select a color'
    null?.label will return undefined, and undefined || 'Select a color' will return 'Select a color' */
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
              {value?.label || "Select a color"}
        <GoChevronDown className="text-lg"/>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full pg-blue">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
