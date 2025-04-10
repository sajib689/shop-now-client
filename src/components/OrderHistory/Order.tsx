import React from 'react';

interface OrderProps {
        id: string;
}

const Order = ({id}: OrderProps) => {
    return (
        <div>
            {id}
        </div>
    );
};

export default Order;