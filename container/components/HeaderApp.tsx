
import React, { useEffect, useRef } from 'react'
import {mount} from 'header/Header';

export default function AppBar() {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    })
    return (
        <div ref={ref}/>
    )
}
