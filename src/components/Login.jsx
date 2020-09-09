import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

function Login({ onIdSubmit }) {
   const idRef = React.useRef();

   const handleSubmit = (e) => {
      e.preventDefault();

      onIdSubmit(idRef.current.value);
   };

   const createNewId = () => {
      onIdSubmit(uuidV4());
   };

   return (
      <Container className="align-items-center d-flex">
         <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group>
               <Form.Label>Enter Your Id</Form.Label>
               <Form.Control type="text" ref={idRef} required></Form.Control>
            </Form.Group>
            <Button type="submit" className="mr-2">
               Login
            </Button>
            <Button onClick={createNewId}>Create A New Id</Button>
         </Form>
      </Container>
   );
}

export default Login;
