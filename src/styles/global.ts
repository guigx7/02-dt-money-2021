import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: ${props => props.theme.colors.background};
        --red: ${props => props.theme.colors.red};
        --green: ${props => props.theme.colors.green};
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: ${props => props.theme.colors.textTitle};
        --text-body: ${props => props.theme.colors.textBody};
        --shape: ${props => props.theme.colors.shape};
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        // font-size: 16px; //default (desktop)
        @media (max-width: 1000px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.7);
            transition: filter 0.3s;
        }
    }

    .mode-toggle{
        float: right;
        margin-top: 1rem;
        margin-right: 0.5rem;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`

