// KanbanBoardTicket.tsx
import styled from "styled-components";

interface KanbanBoardTicketProps {
  ticketNumber: string;
  description: string;
}

const KanbanBoardTicket: React.FC<KanbanBoardTicketProps> = ({
  ticketNumber,
  description,
}) => {
  return (
    <TicketContainer>
      <p>
        <strong>{ticketNumber}</strong>
      </p>
      <p>{description}</p>
    </TicketContainer>
  );
};

const TicketContainer = styled.div`
  background-color: #ffffff;
  border: 1px dashed #cbd5e0;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  p {
    margin: 0;
    color: #4a5568;
  }

  strong {
    display: block;
    color: #2b6cb0;
    margin-bottom: 0.5rem;
  }
`;

export default KanbanBoardTicket;
