import React, {FC} from "react";
import {NavigationStyleOneBase} from "./NavigationStyleOne.style";
import {Nav, Navbar} from "react-bootstrap";
import {NavigationStyleOneContent} from "../../assets/content";

interface IProps {
    navbarBrand: string;
}

export const NavigationStyleOne: FC<IProps> = (props) => {
    return <NavigationStyleOneBase>
        <div className="container pt-4">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                    {props.navbarBrand}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">

                        {NavigationStyleOneContent.map((item) =>
                            <Nav.Link href="#">{item.navText}</Nav.Link>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </NavigationStyleOneBase>
}