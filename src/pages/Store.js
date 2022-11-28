import {Row, Col} from 'react-bootstrap'
import ProductCard from '../components/ProductCard';
import {productsArray} from '../productStore'



function Store(){
    return(
        <>
        <h1 align="center" className='p-3'>Welcome to Store!</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
            {productsArray.map((prd,idx) =>
            (
                <Col align='center' key={idx}>
                   <ProductCard product={prd} />
                </Col> 
             
            )
            )}
           
        </Row>
        </>
        
    )
}

export default Store;