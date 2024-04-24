// KanbanBoard.tsx
import styled from "styled-components";
import { Column } from "../../interface/kanban/types";
import KanbanBoardColumn from "./KanbanBoardColumn";

interface KanbanBoardProps {
  columns: Column[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ columns }) => {
  return (
    <BoardContainer>
      <div className="board">
        {columns.map((column, index) => (
          <KanbanBoardColumn
            // key={column.id}
            key={`${column.id}-${index}`} // key를 id와 index 조합으로 설정
            id={column.id}
            title={column.title}
            tickets={column.tickets}
          />
        ))}
      </div>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  .board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr;
    gap: 1rem;
  }
`;

export default KanbanBoard;
