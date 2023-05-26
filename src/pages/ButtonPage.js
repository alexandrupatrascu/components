import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {

    const handleClick = () => {
        console.log('Clicked!');
    }

    const handleEnter = () => {
        console.log('Hovered!');
    }
    
    return (
        <div>
            <div>
                <Button success rounded onClick={ handleClick }> 
                    <GoBell/>
                    Click me!!!</Button> 
            </div>
            <div>
                <Button danger>Blaaaahhhh</Button> 
            </div>
            <div>
                <Button warning >
                    <GoCloudDownload />
                    Buy!</Button> 
            </div>
            <div>
                <Button secondary onMouseEnter={ handleEnter }>
                    <GoDatabase />
                    Go where you cam from</Button> 
            </div>
            <div>
                <Button primary rounded> Button</Button> 
            </div>
        </div>
    );
}

/*
    We can use PropTypes to check the type of the props we are passing to our components.
    We only want to pass one variation, ie a button can only be primary, secondary, success, warning, or danger.
    In order to check that 2 variations are not passed, we can use a custom prop type.
    If one is passed the props will be true, if not they will be undefined.
    Number(true) = 1, Number(false) = 0, Number(undefined) = NaN
*/

Button.propTypes = {
    checkVariationValue: (primary, secondary, success, warning, danger) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
        if (count > 1) {
            return new Error('Only one variation can be passed to the button');
        }
    }
}

export default ButtonPage;