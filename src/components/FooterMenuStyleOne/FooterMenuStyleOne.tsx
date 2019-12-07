import React, {FC} from 'react';
import {FooterMenuBase} from "./FooterMenuStyleOne.style";
import {Col, Row} from "react-bootstrap";
import {FooterMenuStyleOneContent} from "../../assets/content";

interface IProps {
    id?: number;
}

export const FooterMenuStyleOne: FC<IProps> = (props) => {
    return <FooterMenuBase>
        <div className="container">
            <Row>
                {FooterMenuStyleOneContent.map((item) =>
                    <Col>
                        <h6>{item.title}</h6>
                        <hr/>
                        <ul>
                            {item.content.map((i) =>
                                <li>
                                    <a href={i.menuIitle} className="text-white">
                                        {i.menuIitle}
                                    </a>
                                </li>
                            )}

                        </ul>
                    </Col>
                )}
            </Row>
        </div>
    </FooterMenuBase>
}