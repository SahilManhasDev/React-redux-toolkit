import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.cart);

    const removeToCart = (id) => {
        //dispatch an action
        dispatch(remove(id));
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
                    <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove</Button>
                </Card.Footer>
            </Card>
        </div >
    ));
    return (
        <div className='row'>
            {card}
        </div>
    )
}

export default Cart
