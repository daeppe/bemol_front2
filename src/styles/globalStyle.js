import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
    :root{
            --white: #ffffff;
            --gray: #464353;
            --blue-light: #2C69D2;
            --blue: #3B7FF5;
            --blue-header: #5794FF;
            --red: #F5B93B
        }
        
        
html,body{
    min-height: 100vh;
}
        
    body{
        background: var(--blue-light);
        color: var(--white);      
    }
    body,input, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    ul,li,ol{
        list-style: none;
    }
    `;
