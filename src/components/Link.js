import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ path, children, className, activeClassName }) {

    const { navigate, currentPath } = useNavigation();
    
    const classes = classNames(
        'text-blue-500',
        className,
        /* if the currentPath that the user is vitising right now is equal to our path, 
        then we want to add activeClassName to make the link bold, show that is was selected */
        currentPath === path && activeClassName 
           
    )
    
    const handleClick = (event) => { 
        /* in case user is holding down the CMD key or ctrl key,
        we want to allow the default behavior of the browser, ie open the link in a new tab on key + click
        */
        if (event.metaKey || event.ctrlKey) { 
            return;
        }

        // prevent normal navigation
        event.preventDefault();
        // use our custom navigate function to prevent page reload
        navigate(path);

    }


    return (
        <a className={ classes } onClick={handleClick} href={path}>
            {children}
        </a>
    )
}

export default Link;