import {Card, Button, Form, Row, Col, FormLabel} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {useContext} from 'react';


function ProductCard(props){
    
    //props.product is the product we are selling
    const product=props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)

    return(
<Card>
    <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        { productQuantity > 0 ?
        <>
            <Form as={Row}>
                <FormLabel column="true"  sm="6" > In Cart: {productQuantity}</FormLabel>
                <Col sm="6">
                    <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(product.id)}>+</Button>
                    <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(product.id)} variant="danger">-</Button>
                </Col>
                <br />
                <Button className='my-3' onClick={() =>cart.deleteFromCart(product.id)}>Remove From Cart</Button>

            </Form>
        
        </>
        :
        <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>add to cart</Button>
        }
        
    </Card.Body>
</Card>
    )

}

export default ProductCard;