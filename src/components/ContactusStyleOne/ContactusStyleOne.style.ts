import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";
import bgImg from "../../assets/images/contact.jpg"

export const ContactusStyleOneBase = styled.div`

  background-image: url(${bgImg});
  background-size: cover;
  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  position: relative;
  
  .overlay{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
  }
  
  .container{
    position: relative;
    z-index: 2;
  }
`;