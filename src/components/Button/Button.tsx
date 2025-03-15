import {Button as StyledButton} from './styles';

type ButtonProps = {
    children: string;
    onClick?: () => void;
    typeStyle?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({typeStyle = 'primary', onClick = () => null, children}) => {
    return (
        <StyledButton typeStyle={typeStyle} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button;