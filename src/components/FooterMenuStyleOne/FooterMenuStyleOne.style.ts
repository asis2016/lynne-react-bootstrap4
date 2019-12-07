import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";

export const FooterMenuBase = styled.div`

  background-color: ${DefaultStyle.primary};
  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
  h1, h2, h3, h4, h5, h6{
    color: #fff !important;
  }
  
  ul{
    margin:0px;
    padding:0px;
  }
  
  li{
    color: #fff;
    list-style: none;
  }

`;