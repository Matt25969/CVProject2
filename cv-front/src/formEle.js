import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';

class FormsPage extends React.Component  {
  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Upload a new CV</p>
                  <div className="grey-text">
                    <Input label="First name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Last name" icon="envelope" group type="text" validate error="wrong" success="right"/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit">Register</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default FormsPage;