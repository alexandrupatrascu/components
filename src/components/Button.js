import classnames from 'classnames';

/* classnames library is used to dynamically generate class names; 
if it's truthy, it will add the class name to the element
if it's falsy, it will not add the class name to the element */
const finalClassName = classnames('px-1.5', {
    'bg-blue-500': true,
    'text-yellow-500': false
});

console.log(finalClassName);

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest // this will take all the other props and put them in an object called rest
}) {

    // if we pass a className prop in the Button component, it will be added to the classes variable
    const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-red-500 bg-red-500 text-white': danger,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary, // if outline is true and primary is true, then add text-blue-500
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-red-500': outline && danger,
        'text-yellow-400': outline && warning,
    });

    return (
        <button className={classes} {...rest}>{ children }</button>
    )
}

export default Button;