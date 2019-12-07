import React, {FC} from "react";
import {FooterCopyrightStyleOneBase} from "./FooterCopyrightStyleOneBase.style";
import {Col, Row} from "react-bootstrap";

interface IProps {
    id?: number;
    copyrightYear: number;
    copyrightCompany: string;
}

export const FooterCopyrightStyleOne: FC<IProps> = (props) => {
    return <FooterCopyrightStyleOneBase>
        <div className="container text-white pt-3">
            <Row>
                <Col>
                    <p>
                        Designed by <a href="#" className="text-white">Ashish Singh Maharjan</a>
                    </p>
                </Col>
                <Col className="text-right">
                    <p>
                        Copyright &copy; {props.copyrightYear} {props.copyrightCompany}.
                    </p>
                </Col>
            </Row>
        </div>
    </FooterCopyrightStyleOneBase>
}