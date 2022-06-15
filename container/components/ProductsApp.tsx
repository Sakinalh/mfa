import React, { useEffect, useRef } from 'react'
import {mount} from 'products/ProductsApp';

export default function ProductsApp() {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    })
    return (
        <div ref={ref}/>
    )
}
