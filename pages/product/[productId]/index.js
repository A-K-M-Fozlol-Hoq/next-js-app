import { useRouter } from 'next/router';
import React from 'react';

const productDetails = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const productId = router.query.productId;
    return (
        <div>
            <h1>details about {productId}</h1>
        </div>
    );
};

export default productDetails;