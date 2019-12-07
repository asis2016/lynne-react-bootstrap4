import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";


export const CardProfileStyleOneBase = styled.div`

  background-color: ${DefaultStyle.primary};
  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
  /*border: none;*/
  text-align: center;
  
  h1, p{
    color:#fff !important;
  }
  
  img{
      border-radius: 50%;
      height: 150px;
      width: 150px;
      object-fit: cover;
      top:0;
  }
  
  .card-profile-simple-col{
    display: flex;
    justify-content: center;
  }
  
  .card-profile-simple-col a{
    padding: 10px;
    font-size: 1.5rem;
    color: #fff;
  }
  
  .card-profile-simple-col a:hover{
    color:${DefaultStyle.primaryLight}
  }
  
  .card{
    max-width: 18rem;
    margin: 10px;
  }

`;