// KanbanBoardTicket.tsx
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface KanbanBoardTicketProps {
  ticketNumber: string;
  description: string;
  index: number;
}

const KanbanBoardTicket = React.memo(
  ({ ticketNumber, description, index }: KanbanBoardTicketProps) => {
    // console.log(
    //   `ticketNumber: ${ticketNumber}, description: ${description}, index: ${index}`
    // );
    console.log(`Rendering ticket: ${ticketNumber}, at position ${index}`);
    return (
      <Draggable draggableId={ticketNumber} index={index}>
        {(provided, snapshot) => (
          <TicketContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <TicketNumber>{ticketNumber}</TicketNumber>
            <TicketDescription>{description}</TicketDescription>
          </TicketContainer>
        )}
      </Draggable>
    );
  }
);
const TicketContainer = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) => (props.isDragging ? "#f0f8ff" : "#ffffff")};
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f8ff;
  }
`;

const TicketNumber = styled.strong`
  display: block;
  color: #2b6cb0;
  margin-bottom: 0.5rem;
`;

const TicketDescription = styled.p`
  margin: 0;
  color: #4a5568;
`;

export default KanbanBoardTicket;
