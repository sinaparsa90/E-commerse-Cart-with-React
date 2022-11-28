import {Button,  Navbar, Modal, ModalHeader, ModalTitle, ModalBody} from "react-bootstrap";
import {useContext, useState} from 'react'; 
import {CartContext} from '../CartContext';
import { CartProduct } from "./CartProduct";


function  NavbarComponent(){
    const cart= useContext(CartContext)
    const [show, setShow]=useState(false);
    const handleClose= () =>  setShow(false);
    const handleShow= () =>  setShow(true);

    const productsCount = cart.items.reduce((sum , product) => sum + product.quantity, 0);



    return(
     <>
        <Navbar expand="sm" >
         <Navbar.Brand href="/">Ecammerce Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end" >
         <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
         </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
           <ModalHeader closeButton>
            <ModalTitle>ShoppingCart</ModalTitle>
           </ModalHeader>
           <ModalBody>
            {productsCount>0 ? 
                 <>
                 <p>Items in  your cart:</p>
                 {cart.items.map((currentProduct, idx) => (
                  <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />

                 ))}
                 <h1>Total: {cart.getTotalCost().toFixed(2)}  $</h1>
                 </>
            : <h3>There is No item in your Cart</h3>
            
        }
            
           </ModalBody>
        </Modal>
     </>
 
    )

}

export default NavbarComponent;