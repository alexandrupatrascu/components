import ReactDom from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, actionBar, children }) {
  useEffect(() => {
    /* 
        to prevent user from scrolling the background when the modal is open
        we add a overflow: hidden class to the body
        we remove the 
        */
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  /* 
    Using className="ablolute inset-0" to make the div take up the whole screen - find the closesest positioned parent
    if they all have position: static, then we will put the model in the top left corner of the whole html doc.
    But this is only relative to the parent element, so if we get a `positioned` parent, it won't work.
    If we would have a `positioned` parent, the modal will be relative to that parent, so it will not fill the whole screen
    
    To get around this we can use portals - we will place the model div in the body of the html
    the modal div will neer have a `positioned` parent, so it will always fill the whole screen
    */

  return ReactDom.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80 "
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
