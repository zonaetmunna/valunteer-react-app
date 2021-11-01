import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleService = ({ service }) => {
     const { _id, name, img } = service;
     return (
          <div>
               <Col>
                    <Card>
                         <Card.Img variant="top" src={img} />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>

                         </Card.Body>
                    </Card>
               </Col>
          </div>
     );
};

export default SingleService;