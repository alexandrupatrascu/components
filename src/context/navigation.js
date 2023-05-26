import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    /* handling user navigating between forward and back buttons
    this will only apply when the user is navigating between pages using pushState
    it does not apply when the user is navigating between url he typed in the address bar
    pushState is used in the Link component in the Navigation component
    */ 
    useEffect(() => { 
        const handler = () => { 
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', handler);
        // cleanup function for useEffect to remove event listener
        return () => { 
            window.removeEventListener('popstate', handler);
        }
    }, []);


    const navigate = (path) => { 
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    )
};

export { NavigationProvider };
export default NavigationContext;