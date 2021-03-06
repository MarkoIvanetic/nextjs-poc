import React from 'react'
import Link from 'next/link'

import classes from "./Button.module.css"

const Button = ({href, onClick, children}) => {

    if (href) {
        return (
            <Link href={href}>
                <a className={classes.btn}>{children}</a>
            </Link>
        )
    }

    return <button className={classes.btn} onClick={onClick}>{children}</button>


}

export default Button
