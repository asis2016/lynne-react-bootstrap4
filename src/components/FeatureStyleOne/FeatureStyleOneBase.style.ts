import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";


export const FeatureStyleOneBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
  .feature-style-one-title{
      padding-bottom: 70px;
  }
  
  .feature-items{
    text-align: center;
    padding: 30px;
  }
  
  .feature-items h4{
    padding-top: 20px;
  }
  
  .col-one img{
    border-radius: 10px;
    margin-top: 20px;
  }
  
  .col-two .feature-item-img{
    height: 80px !important;
    border-radius: 50%;
  }
`;