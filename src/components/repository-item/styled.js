import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 16px 16px;
    width: 400px;
    min-height: 150px;
    align-content: center;
    text-align: center;
`;

export const WrapperTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const WrapperFullName = styled.h4`
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0;
    color: #2d3748;
`;

export const WrapperLink = styled.a`
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0;
    color: #3182ce;
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        margin: 8px;
        text-align: center;
    }

    h4 {
        font-weight: bold;
    }
`;