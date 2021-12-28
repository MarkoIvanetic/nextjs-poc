import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Button from './Button'
import classes from './EventItem.module.css'
import AddressIcon from './icons/address-icon'
import ArrowRightIcon from './icons/arrow-right-icon'
import DateIcon from './icons/date-icon'

const EventItem = ({ event }) => {
    const date = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <li className={classes.item}>
            <Image src={'/' + event.image} alt={event.title} width={250} height={160} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{event.title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{date}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>Matije Slatinskog 4</address>
                    </div>
                </div>
                <div className={classes.itemButton}>
                    <Button href={{ pathname: '/events/[id]', query: { id: event.id } }}>
                        <span>Explore event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem
