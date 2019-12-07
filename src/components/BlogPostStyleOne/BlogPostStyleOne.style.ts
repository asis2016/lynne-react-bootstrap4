import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";


export const BlogPostStyleOneBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 50px;
  
  p{
    font-size: 1rem;
    text-align: justify;
  }
  
  .col-two{
    padding: 0px 0px 0px 50px;
  }
  
  .col-two .list-group .active{
      background-color: ${DefaultStyle.primaryPColor};
      border-color: ${DefaultStyle.primaryPColor};
  }
  
  .col-two .media{
    padding:10px;
  }
  
  .col-two .media img{
    height: 60px;
    width: 60px;
  }
  
  .col-two .media h6{
    margin-bottom: 0.2rem;
  }
  
  .col-two .media p{
    font-size: 0.8rem;
    text-align: left;
  }
  
  .sidebar-ads-style-one p{
    font-size: 0.8rem;
    text-align: left;
  }
  
  .sidebar-ads-style-one .card-img-top{
      height: 150px;
    object-fit: cover;
    width: auto;
  }

`;
