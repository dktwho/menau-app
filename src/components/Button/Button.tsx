import {ButtonProps} from "./Button.props.ts";
import cn from 'classnames'
import {FC} from "react";

export const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    );
};

export default Button;

export const ButtonAlt: FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    )
}