import React, {FC} from 'react'
import {MasterHeadStyleOneBase} from "./MasterHead.style";
import {Carousel, Col, Row} from "react-bootstrap";
import {NavigationStyleOne} from "../NavigationStyleOne/NavigationStyleOne";
import {MasterHeadStyleOneCarouselContent, MasterHeadStyleOneContent} from "../../assets/content";
import {DefaultStyle} from "../../assets/style/Style";

interface IProps {
    title?: string;
}

export const MasterHeadStyleOne: FC<IProps> = (props) => {
    return <MasterHeadStyleOneBase className="vh-100">

        <div className="overlay"></div>

        {/* Navigation */}
        <NavigationStyleOne navbarBrand="Lynne Travel"/>

        <div className="container-fluid master-head-content">
            <Row className="vh-100 justify-content-center align-items-center">
                <Col xs={6}>
                    <h1>
                        {MasterHeadStyleOneContent.title}
                    </h1>
                    <p className="pt-3 pb-5">
                        {MasterHeadStyleOneContent.content}
                    </p>
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <button type="button" className="btn btn-primary-lynne btn-lg mr-4">Jetzt erkunden!
                                </button>
                                <button type="button" className="btn btn-secondary-lynne btn-lg">Beginn mit dem
                                    Einkauf
                                </button>
                            </div>
                        </div>
                    </form>
                </Col>
                <Col xs={4}>
                    <Carousel>
                        {MasterHeadStyleOneCarouselContent.map((item) =>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require("../../assets/images/" + item.img)}
                                    alt={item.title}
                                />
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Col>
            </Row>
        </div>
    </MasterHeadStyleOneBase>
}