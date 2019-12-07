import React, {FC} from "react";
import {SidebarAdsStyleOneBase} from "./SidebarAdsStyleOne.style";

interface IProps {
    id?: number;
    img: string;
    title: string;
    content: string;
    urlText: string;
    url: string;
}

export const SidebarAdsStyleOne: FC<IProps> = (props) => {
    return <SidebarAdsStyleOneBase>
        <div className="sidebar-ads-style-one mt-5 mb-2">
            <div className="card">
                <img className="card-img-top" src={require("../../assets/images/" + props.img)} alt=""/>
                <div className="card-body">
                    <h5 className="text-white">{props.title}</h5>
                    <p className="text-white">
                        {props.content}
                    </p>
                    <a href={props.url} className="btn btn-secondary-lynne">
                        {props.urlText}
                    </a>
                </div>
            </div>
        </div>
    </SidebarAdsStyleOneBase>
}