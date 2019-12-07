import styled from "styled-components";
import bgImg from "../../assets/images/master-head.jpg"

export const MasterHeadStyleOneBase = styled.div`

  background-image: url(${bgImg});
  background-size: cover;
  
  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
  
  .master-head-content{
    position: relative;
    z-index: 3;
  }
  
  .master-head-content h1{
      font-size: 3.2rem;
      font-weight: 600;
      color: #fff;
  }
  
  .master-head-content p{
    color: #fff;
    font-size: 1.2rem;
    width:80%;
  }
  
  .carousel-item img{
    height: 400px;
    border-radius: 10px;
    object-fit: cover;
  }
  
`;