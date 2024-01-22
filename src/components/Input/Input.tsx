import styles from './Input.module.css'
import cn from "classnames";
import {forwardRef} from "react";
import {InputProps} from "./Input.props.ts";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({className, isValid = true, autoComplete = 'on' ,  ...props} , ref) {
    return (
        <input {...props} ref={ref} className={cn(styles['input'], className, autoComplete,  styles['input'], {
            [styles['invalid']]: !isValid,
        })}/>

    );
})