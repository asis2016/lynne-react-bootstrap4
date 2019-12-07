import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";

export const PricingSytleOneBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
  .card-header{
    text-align: center;
  }
  
  li{
    text-align: center;
    list-style: none;
  }
  
  li:first-child, li:nth-child(1){
    font-size: 1.5rem;
    line-height: 2;
  }
  
  .card-footer{
      text-align: center;
  }
`;