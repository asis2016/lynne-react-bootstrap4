import React, {FC} from 'react'
import {BlogPostStyleOneBase} from "./BlogPostStyleOne.style";
import {Col, Row, Image, Container} from "react-bootstrap";
import {BlogPostStyleOneContent, ContentLoremIpsum, RecentPostsStyleOneContent} from "../../assets/content";
import {SidebarAdsStyleOne} from "../SidebarAdsStyleOne/SidebarAdsStyleOne";
import {ArchiveStyleOne} from "../ArchiveStyleOne/ArchiveStyleOne";
import {RecentPostsStyleOne} from "../RecentPostsStyleOne/RecentPostsStyleOne";

interface IProps {
    id?: number;
    category: string;
}

export const BlogPostStyleOne: FC<IProps> = (props) => {
    return <BlogPostStyleOneBase>
        <Container>
            <Row>
                {/* Main Content */}
                <Col xs={8} className="col-one">

                    <h1>Category: {props.category}</h1>
                    <hr/>

                    {/* Blog Posts */}
                    {BlogPostStyleOneContent.map((item) =>
                        <div className="pb-5">
                            <h4>{item.title}</h4>
                            <p>{item.date} by <a href="#">{item.author}</a></p>
                            <Image src={require(`../../assets/images/` + item.img)} fluid/>
                            <p className="pt-3 pb-3"><i>{item.shortContent}</i></p>
                            <p>
                                {ContentLoremIpsum.paragraphOne}
                            </p>

                            <p>
                                {ContentLoremIpsum.paragraphTwo}
                            </p>
                            <a href="#">Weiterlesen</a>
                        </div>
                    )}
                </Col>

                {/* Sidemenu */}
                <Col xs={4} className="col-two">

                    {/* Archive */}
                    <ArchiveStyleOne title={"Archive 2019"}/>

                    {/* Recent Posts */}
                    <RecentPostsStyleOne title={"Recent Posts"}/>

                    {/* Ads */}
                    <SidebarAdsStyleOne title={"Ads Title"}
                                        img={"magazine-1.jpg"}
                                        content={`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti a tque corrupt
                                        i quos dolores et quas molestias excepturi sint occaecati cupiditate.`}
                                        url={"http://google.com"}
                                        urlText={"Go Somewhere"}
                    />

                </Col>
            </Row>
        </Container>

    </BlogPostStyleOneBase>
}