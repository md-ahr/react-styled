import { ButtonStyledComponent } from './styles/Button.styles';

const Button = ({ btnType, children }) => {
    return (
        <ButtonStyledComponent type={btnType}>{children}</ButtonStyledComponent>
    );
};

export default Button;
