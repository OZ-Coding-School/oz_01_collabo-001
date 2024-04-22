// KanbanBoardColumn.tsx
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Tickets } from "../../interface/kanban/types";
import KanbanBoardTicket from "./KanbanBoardTicket";

interface KanbanBoardColumnProps {
  id: string;
  title: string;
  tickets: Tickets;
}

const KanbanBoardColumn: React.FC<KanbanBoardColumnProps> = ({
  id,
  title,
  tickets,
}) => {
  return (
    <KanbanColumn>
      <div className="column-header">{title}</div>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="column"
            style={{
              backgroundColor: snapshot.isDraggingOver
                ? "lightblue"
                : "inherit",
            }}
          >
            {tickets.map((ticket, index) => (
              <KanbanBoardTicket
                key={`${ticket.id}-${index}`} // 이전: key={ticket.id}
                index={index}
                ticketNumber={ticket.id}
                description={ticket.description}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </KanbanColumn>
  );
};
const KanbanColumn = styled.div`
  .column-header {
    text-align: center;
    padding: 0.5rem;
    border-bottom: 3px solid #cbd5e0;
    margin-bottom: 1rem;
    background-color: #edf2f7;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  .column {
    background-color: #edf2f7;
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    padding: 1rem;
  }
`;

export default KanbanBoardColumn;
