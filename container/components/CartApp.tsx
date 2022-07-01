import React, { useEffect, useRef } from 'react'
import {mount} from 'cart/CartApp';

export default function CartApp() {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    },[ref])
    
    return (
        <div ref={ref}/>
    )
}
