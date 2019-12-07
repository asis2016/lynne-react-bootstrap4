import React, {FC} from 'react'
import {FeatureStyleOneBase} from './FeatureStyleOneBase.style'
import {Col, Container, Image, Row} from "react-bootstrap";
import {FeatureStyleOneContent} from "../../assets/content";

interface IProps {
    id?: number;
    title: string;
    caption: string;
    featureItem?: Array<IFeatureItems>;
}

interface IFeatureItems {
    id?: number;
    title: string;
}

export const FeatureStyleOne: FC<IProps> = (props) => {

    return <FeatureStyleOneBase>
        <Container>
            <Row className="feature-style-one-title">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <h1>{props.title}</h1>
                    <p className="pt-3 pb-3">{props.caption}</p>
                </Col>
            </Row>

            <div className="row">
                <div className="col col-one">
                    <Image src={require("../../assets/images/feature-0.jpg")} fluid/>
                </div>

                <div className="col col-two">
                    <div className="row">
                        {FeatureStyleOneContent.map((item) =>
                            <div className="col-md-6">
                                <div className="feature-items">
                                    <Image
                                        src={require("../../assets/images/" + item.img)}
                                        className="img feature-item-img"
                                    />
                                    <h4>{item.title}</h4>
                                    <p>{item.caption}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    </FeatureStyleOneBase>
}