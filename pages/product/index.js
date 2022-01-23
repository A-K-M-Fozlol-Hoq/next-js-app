import Link from 'next/link';
import React from 'react';

const index = ({productId=100}) => {
    return (
        <div>
            <Link href="/"><a>HOme</a></Link>
            <Link href={`/product/${productId}`}><a>product {productId}</a></Link>
            <Link href="/product/2"><a>product2</a></Link>
            <Link href="/product/3" replace><a>product3</a></Link>
        </div>
    );
};

export default index;