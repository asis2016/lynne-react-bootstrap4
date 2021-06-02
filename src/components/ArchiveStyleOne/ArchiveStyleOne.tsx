import React, {FC} from "react";
import {ArchiveStyleOneBase} from "./ArchiveStyleOne.style";
import {ArchiveStyleOneContent} from "../../assets/content";

interface IProps {
    id?: number;
    title: string;
}

export const ArchiveStyleOne: FC<IProps> = (props) => {
    return (
      <ArchiveStyleOneBase>
        <div className="archive-style-one">
          <ul className="list-group">
            <li className="list-group-item active">
              <h4 className="text-white">{props.title}</h4>
            </li>
            {ArchiveStyleOneContent.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item.month}
                <div className="pull-right badge bg-secondary-lynne text-white">
                  {item.posts} posts
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ArchiveStyleOneBase>
    );
}