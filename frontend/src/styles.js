import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    /* we doesn't need to specify width 100% here because every div comes with it by default because of its display block  */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px;
    background: #FFF;
    border-radius: 4px;
    padding: 20px;
`;

