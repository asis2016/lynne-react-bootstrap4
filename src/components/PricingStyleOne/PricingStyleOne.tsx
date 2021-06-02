import React, {FC} from "react"
import {PricingSytleOneBase} from "./PricingSytleOneBase.style";
import {Card, Col, Container, Row} from "react-bootstrap";
import {PricingStyleOneContent} from "../../assets/content";

interface IProps {
    id?: number;
    title: string;
    caption: string;
}

export const PricingSytleOne: FC<IProps> = (props) => {
    return (
      <PricingSytleOneBase>
        <Container>
          <Row>
            <Col className="text-center pt-5 pb-5">
              <h1>{props.title}</h1>
              <p>{props.caption}</p>
            </Col>
          </Row>
          <Row>
            {PricingStyleOneContent.map((i, index) => (
              <Col key={index}>
                <Card>
                  <Card.Header>
                    <h4 className="text-white">{i["title"]}</h4>
                  </Card.Header>
                  <Card.Body>
                    {i["pricingItems"].map((i, index) => (
                      <li key={index}>{i}</li>
                    ))}
                  </Card.Body>
                  <Card.Footer>
                    <button className="btn btn-secondary-lynne">
                      {i["linkText"]}
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </PricingSytleOneBase>
    );
}