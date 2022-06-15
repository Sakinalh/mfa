
import React, { useEffect, useRef } from 'react'
import {mount} from 'basket/Basket';

export default function Basket() {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    })
    return (
        <div ref={ref}/>
    )
}
