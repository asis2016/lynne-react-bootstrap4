import React, {FC} from "react";
import {RecentPostsStyleOneBase} from "./RecentPostsStyleOne.style";
import {RecentPostsStyleOneContent} from "../../assets/content";

interface IProps {
    id?: number;
    title: string;
}

export const RecentPostsStyleOne: FC<IProps> = (props) => {
    return <RecentPostsStyleOneBase>
        <div className="recent-posts-style-one">
            <h4 className="mt-5 mb-2">{props.title}</h4>
            {RecentPostsStyleOneContent.map((item) =>
                <div className="media">
                    <img className="mr-3" src={require("../../assets/images/" + item.img)} alt=""/>
                    <div className="media-body">
                        <h6 className="mt-0">{item.title.substring(0, 20)} ...</h6>
                        <p>
                            {item.shortContent.substring(0, 50)} ...
                        </p>
                    </div>
                </div>
            )}
        </div>
    </RecentPostsStyleOneBase>
}