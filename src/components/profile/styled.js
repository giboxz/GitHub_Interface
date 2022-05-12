import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    font-size: 16px;

    @media(max-width: 950px) {
        font-size: 12px;
    }

    @media(max-width: 500px) {
        font-size: 10px;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    
    h3 {
        margin-right: 8px;
    }

    a {
        font-size: 1em;
        color: #3182ce;
        font-weight: bold;
    }
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 200px;
    margin-left: 8px;
    margin-top: 8px;

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    h3 {
        font-size: 1.125em;
        font-weight: bold;
    }

    h4 {
        font-size: 1em;
        font-weight: bold;
    }

`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;

    @media(max-width: 950px) {
        width: 175px;
    }

    @media(max-width: 500px) {
        width: 150px;
    }
`;


