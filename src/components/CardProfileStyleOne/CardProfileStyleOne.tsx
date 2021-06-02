import React, {FC} from "react"
import {Card, Col, Image, Row} from "react-bootstrap";
import {CardProfileStyleOneBase} from "./CardProfileStyleOne.style";
import {CardProfileStyleOneContent} from "../../assets/content";

interface IProps {
    title: string;
    caption: string;
};

export const CardProfileStyleOne: FC<IProps> = (props) => {
    return (
      <CardProfileStyleOneBase>
        <div className="container-fluid">
          <Row className="pb-5">
            <Col md={{ span: 6, offset: 3 }} className="text-center">
              <h1 className="text-white">{props.title}</h1>
              <p className="pt-3 pb-3 text-white">{props.caption}</p>
            </Col>
          </Row>

          <Row>
            <Col className="card-profile-simple-col">
              {CardProfileStyleOneContent.map((item, index) => (
                <Card key={index}>
                  <Card.Body>
                    <Image
                      src={require(`../../assets/images/` + item.imageUrl)}
                      fluid
                    />
                    <h4 className="pt-4 text-white">{item.name}</h4>
                    <p>{item.content}</p>
                    <p>
                      {item.socialLink.map((i, index) => (
                        <a href={i.url} key={index}>
                          <i
                            className={`fa fa-` + i.faIcon}
                            aria-hidden="true"
                          ></i>
                        </a>
                      ))}
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </div>
      </CardProfileStyleOneBase>
    );


}