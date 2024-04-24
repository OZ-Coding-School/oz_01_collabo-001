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
            <TicketRow>
              <TicketId>{ticketNumber}</TicketId>
              <Separator />
              <TicketDescription>{description}</TicketDescription>
            </TicketRow>
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

const TicketRow = styled.div`
  display: flex;
  align-items: center;
`;

const TicketId = styled.div`
  // background-color: #dfe6e9;
  // color: #2d3436;
  // border-radius: 4px;
  // padding: 4px 8px;
  // font-size: 0.9rem;
  // font-weight: 600;
  background-color: #dfe6e9;
  color: #2d3436;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
`;

const Separator = styled.hr`
  width: 1px;
  height: 16px;
  background-color: #b2bec3;
  margin: 0 12px;
`;

const TicketDescription = styled.p`
  margin: 0;
  color: #2d3436;
  font-size: 0.9rem;
`;

export default KanbanBoardTicket;
