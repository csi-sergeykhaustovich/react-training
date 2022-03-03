import styled from 'styled-components';
import Card from "../Card/Card.styled";
import Button from "../Button/Button.styled";

const StyledCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  & header {
    background: #4f005f;
    padding: 1rem;
  }

  & header h2 {
    margin: 0;
    color: white;
  }

  & .content {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;


const ModalOverlay = (props) => {
    const { title, message, onConfirm } = props;

    return (
        <StyledCard>
            <header>
                <h2>{title}</h2>
            </header>
            <div className='content'>
                <p>{message}</p>
            </div>
            <footer>
                <Button onClick={onConfirm}>Ok</Button>
            </footer>
        </StyledCard>
    );
}

export default ModalOverlay;
