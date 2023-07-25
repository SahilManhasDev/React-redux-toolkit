import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice'
import { getProducts } from '../store/productSlice';
import statusCode from '../utils/statusCode';
const Product = () => {

    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (status === statusCode.LOADING) {
        return <p>Loading....</p>
    }
    const addToCart = (product) => {
        //dispatch an action
        dispatch(add(product))
    }
    const card = products.map(product => (
        <div className='col-md-3' style={{ marginBottom: '10px' }} key={product.id}>
            <Card style={{ width: '18rem' }} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" style={{ width: '100px', height: '130px' }} src={product.thumbnail} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center' style={{ backgroundColor: 'white' }}>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div >
    ));
    return (
        <>
            <div className='row'>
                {card}
            </div>
        </>
    )
}

export default Product
