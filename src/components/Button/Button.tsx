import {ButtonProps} from "./Button.props.ts";
import cn from 'classnames'
import {FC} from "react";
import './Button.module.css'

export const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    );
};

export const ButtonAlt: FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    )
}