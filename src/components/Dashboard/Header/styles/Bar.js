import styled from 'styled-components';

export default styled.div`
    position: fixed;
    width: calc(100vw - 20px);
    height: 50px;
    background-color: ${props => props.theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    top: 0;
`;
