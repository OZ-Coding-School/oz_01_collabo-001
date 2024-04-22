// KanbanBoardColumn.tsx
import styled from "styled-components";
import { Ticket } from "../../interface/kanban/types";
import KanbanBoardTicket from "./KanbanBoardTicket";

interface KanbanBoardColumnProps {
  title: string;
  tickets: Ticket[];
}

const KanbanBoardColumn: React.FC<KanbanBoardColumnProps> = ({
  title,
  tickets,
}) => {
  return (
    <KanbanColumn>
      <div className="column-header">{title}</div>
      <div className="column">
        {tickets.map((ticket) => (
          <KanbanBoardTicket
            key={ticket.id}
            ticketNumber={ticket.id}
            description={ticket.description}
          />
        ))}
      </div>
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
