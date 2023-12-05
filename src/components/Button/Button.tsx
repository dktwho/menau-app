import {ButtonProps} from "./Button.props.ts";

export const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button {...props}>{children}</button>
    );
};

export default Button;