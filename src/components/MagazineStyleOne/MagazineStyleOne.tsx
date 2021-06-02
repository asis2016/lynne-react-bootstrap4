import React, {FC} from "react"
import {MagazineStyleOneBase} from "./MagazineStyleOne.style";
import {Carousel, Col, Row} from "react-bootstrap";
import {
    MagazineStyleOneCarouselContent,
    MagazineStyleOneContent,
    MasterHeadStyleOneContent
} from "../../assets/content";

interface IProps {
    id?: number;
    title: string;
    caption: string;
}

export const MagazineStyleOne: FC<IProps> = (props) => {

    return (
      <MagazineStyleOneBase>
        <div className="container">
          <Row className="pb-5">
            <Col md={{ span: 6, offset: 3 }} className="text-center">
              <h1 className="text-white">{props.title}</h1>
              <p className="pt-3 pb-3 text-white">{props.caption}</p>
            </Col>
          </Row>

          <div className="row">
            <div className="col-12 pb-5">
              <section className="row">
                <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                  <Carousel>
                    {MagazineStyleOneCarouselContent.map((item, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={require("../../assets/images/" + item.img)}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h6 className="text-white font-weight-bold">
                            {item.title}
                          </h6>
                          <p>{item.caption}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                  <div className="row">
                    {MagazineStyleOneContent.map((item, index) => (
                      <div className="col-6 pb-1 pt-0 pr-1" key={index}>
                        <div className="card border-0 rounded-0 text-white overflow zoom">
                          <div className="position-relative">
                            <div className="ratio_right-cover-2 image-wrapper">
                              <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                <img
                                  className="img-fluid"
                                  src={require("../../assets/images/" +
                                    item.img)}
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                              <a
                                className="p-1 badge badge-secondary-lynne rounded-0"
                                href="#"
                              >
                                {item.tag}
                              </a>

                              <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                <h6 className="text-white my-1">
                                  {item.title}
                                </h6>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </MagazineStyleOneBase>
    );

}