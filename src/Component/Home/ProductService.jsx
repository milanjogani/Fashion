import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./collection.css"
import { Link } from 'react-router-dom';

const ProductService = () => {
    return (
        <>
            <div className="productServiceOuter my-5 py-3">
                <div className="container">
                    <div className="productServiceInner d-flex row">
                        <Card className='bg-transparent  col-lg-4'>
                            <Card.Img variant="top" src="images/card-1.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                               <Link to="/details/1">
                               <Button className="btn btn-light">Suit Selection</Button>
                               </Link>
                            </Card.Body>
                        </Card>
                        <Card className='bg-transparent col-lg-4'>
                            <Card.Img variant="top" src="images/card-3.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to="/details/2">
                               <Button className="btn btn-light">Shirt Selection</Button>
                               </Link>
                            </Card.Body>
                        </Card>
                        <Card className='bg-transparent col-lg-4'>
                            <Card.Img variant="top" src="images/card-2.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to="/details/3">
                               <Button className="btn btn-light">Jacket Selection</Button>
                               </Link>
                            </Card.Body>
                        </Card>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductService