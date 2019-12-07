import styled from "styled-components";
import {DefaultStyle} from "./assets/style/Style";

export const AppBase = styled.div`

/*    some color ideas
 *    icons:  CB8C69
 *    headings: 50639c
      paragraph: 424f77
 *
 *    primary button: #cb8c69
 *    secondary button: #7db2ca
 *    button text: #fff
 *    background: #efe8dd
 */


body {
    background-color: #efe8dd;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Solway', serif;
}

p, li, a, ul {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
}

h1, h2, h3, h4, h5, h6 {
    color: ${DefaultStyle.primaryHColor};
}

.card {
    background-color: #587caf;
    color: #fff;
}

.card h4 {
    font-weight: 400;
}

.cardprofilesimple-container {
    margin-top: 100px;
    margin-bottom: 100px;
}

/* Background */
.bg-primary-lynne{
  background: ${DefaultStyle.primary};
}

.bg-secondary-lynne{
  background: ${DefaultStyle.secondary};
}

/* Buttons */
.btn-primary-lynne{
  background: ${DefaultStyle.primary};
  color:#fff;
  font-size: 1rem;
}

.btn-secondary-lynne{
  background: ${DefaultStyle.secondary};
  color:#fff;
  font-size: 1rem;
}

/* Badges */
.badge-primary-lynne{
  background: ${DefaultStyle.primary};
  color: #fff;
}

.badge-secondary-lynne{
  background: ${DefaultStyle.secondary};
  color: #fff;
}

/* Texts */
P{
  color: ${DefaultStyle.primaryLight}
}

`;