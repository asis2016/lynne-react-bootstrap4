import React, {FC} from "react";
import {ContactusStyleOneBase} from "./ContactusStyleOne.style";
import {Col, Container, Row} from "react-bootstrap";


interface IProps {
    id?: string;
    title: string;
    caption: string;
}

export const ContactusStyleOne: FC<IProps> = (props) => {
    return <ContactusStyleOneBase>

        <div className="overlay"></div>

        <Container>
            <Row>
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <h1 className="text-white">{props.title}</h1>
                    <p className="pt-3 pb-3 text-white">{props.caption}</p>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <form>
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" id="inputName"
                                           placeholder="Your name*"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" id="inputEmail"
                                           placeholder="Your Email*"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" id="inputPhone"
                                           placeholder="Your Phone*"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="inputMessage" id="inputMessage" cols={30} rows={5.5}
                                              className="form-control form-control-lg"
                                              placeholder="Your Message*"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-secondary-lynne btn-lg">Send Message</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </ContactusStyleOneBase>
}