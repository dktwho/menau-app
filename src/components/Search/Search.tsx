import styles from './Search.module.css'
import cn from "classnames";
import {forwardRef} from "react";
import {SearchProps} from "./Search.props.ts";

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({className, isValid = true,  ...props} , ref) {
    return (
        <div className={styles['input-wrapper']}>
            <input {...props} ref={ref} className={cn(styles['input'], className, styles['input'], {
                [styles['invalid']]: !isValid,
            })}/>
            <img className={styles['icon']} src='/search-icon2.svg' alt="search icon"/>
        </div>


    );
})