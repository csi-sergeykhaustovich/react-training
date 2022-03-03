import styled from 'styled-components';
const DEFAULT_TYPE = 'button';

const StyledButton = styled.button`
    font: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;

    &:hover,
    &:active {
      background: #741188;
      border-color: #741188;
    }

    &:focus { 
      outline: none;
    }
`;

const Button = props => {
    const {type, onClick, children} = props;

    return <StyledButton
        type={type || DEFAULT_TYPE}
        onClick={onClick}
    >{children}</StyledButton>
}

export default Button;

