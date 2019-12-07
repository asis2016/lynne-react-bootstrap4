import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";


export const NavigationStyleOneBase = styled.div`

  position: relative;
  z-index: 3;

  .navbar{
    background: ${DefaultStyle.secondary};
  }
  
  .navbar-brand{
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }
  
  .navbar-brand:hover{
    color:#fff;
  }
  
  .nav-link{
    color:#fff !important;
  }

`;