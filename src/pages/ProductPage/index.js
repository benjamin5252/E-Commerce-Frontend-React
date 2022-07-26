import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../../components/Rating'
import product from '../../products'
import products from '../../products'

const ProductPage = (props) => {
  // console.log("props", props);
  // const product = products.find(p => p._id === match.params.id)
  const params = useParams();
  const product = products.find(p => p._id === params.id)
  return (
    <>
      <Link to="/" className='btn btn-light my-3'>Go back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={` ${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>
                    ${product.price}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    <strong>
                    ${product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroupItem>
                <Button style={{width: '100%'}} className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
                
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
    
  )
}

export default ProductPage