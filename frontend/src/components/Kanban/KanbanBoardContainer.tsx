// KanbanBoardContainer.tsx
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { Column, Columns, Tickets } from "../../interface/kanban/types";
import KanbanBoard from "./KanbanBoard";

// supporting types(지원 타입)
type DropResult = {
  draggableId: DraggableId;
  type: TypeId;
  source: DraggableLocation;
  // may not have any destination (drag to nowhere)(어떤 destination 도 없을 것입니다.(어디로도 드래그 되지 않습니다.))
  destination: DraggableLocation | null | undefined;
};

type Id = string;
type DroppableId = Id;
type DraggableId = Id;
type TypeId = Id;
type DraggableLocation = {
  droppableId: DroppableId;
  // the position of the droppable within a droppable(droppable 동안 droppable의 position)
  index: number;
};

/*
const grid = 8;
const getItemStyle = (
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
  isDragging: boolean
): React.CSSProperties => ({
  userSelect: "none",
  padding: grid * 2,
  marginBottom: grid,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle,
});
const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});
*/

const reorder = (
  //   list: Stage[],
  list: Tickets,
  startIndex: number,
  endIndex: number
): Tickets => {
  // const result = Array.from(list);
  const result = list.map((ticket) => ({ ...ticket }));
  console.log("result prev", result);
  const [removed] = result.splice(startIndex, 1);
  //result.splice(endIndex, 0, removed);
  result.splice(endIndex, 0, removed);

  return result;
};

const KanbanBoardContainer: React.FC<{ initialTickets: Tickets }> = ({
  initialTickets,
}) => {
  const initialColumns: Columns = {
    todo: initialTickets.filter((ticket) => ticket.condition === "todo"),
    inProgress: initialTickets.filter(
      (ticket) => ticket.condition === "in_progress"
    ),
    qa: initialTickets.filter((ticket) => ticket.condition === "qa"),
    done: initialTickets.filter((ticket) => ticket.condition === "done"),
  };

  const [columns, setColumns] = useState<Columns>(initialColumns);

  // Columns 객체를 Column[] 배열로 변환
  const columnsArray: Column[] = Object.entries(columns).map(
    ([status, tickets]) => ({
      id: status,
      title: status.charAt(0).toUpperCase() + status.slice(1).replace("_", " "),
      tickets: tickets,
    })
  );

  useEffect(() => {
    console.log("Columns updated:", columns);
  }, [columns]);

  const onDragEnd = (result: DropResult) => {
    // 드롭 대상이 없는 경우
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    // 같은 droppable 내에서의 이동 // result.source 드래그 시작 위치, result.destination 드래그 끝 위치
    if (source.droppableId === destination.droppableId) {
      console.log("같은 droppable 내에서의 이동");

      const tickets = columns[source.droppableId as keyof Columns];

      if (tickets) {
        const newTickets = reorder(tickets, source.index, destination.index);

        // items 배열 전체 업데이트
        /*
        const updatedItems = tickets.map((item: Column) => {
          return item.id === column.id
            ? { ...item, tickets: newTickets } // 새로운 티켓 배열로 업데이트
            : { ...item }; // 변경이 없는 아이템은 새 객체로 복사
        });
        */
        // columns 상태 업데이트
        const updatedColumns = {
          ...columns,
          [source.droppableId]: newTickets,
        };

        setColumns(updatedColumns);
      }
    } else {
      // 다른 droppable 간의 이동 // droppableId: '1', '2', '3', '4' : 각 index 는 0번부터 시작
      console.log("다른 droppable 간의 이동");
      // 1. 드래그 된 아이템이 뭔지를 알아야한다.
      // 2. destinationStage 와, 이동된 위치를 찾아서 해당 위치에 넣어주어야 한다.
      // 3. sourceStage 에서는 해당 아이템을 제거해주어야 한다.

      // const draggableId = result.draggableId; // 현재 선택된 아이템
      const sourceTickets = columns[source.droppableId as keyof Columns];
      const destinationTickets =
        columns[destination.droppableId as keyof Columns];

      if (sourceTickets && destinationTickets) {
        const [removed] = sourceTickets.splice(source.index, 1);
        destinationTickets.splice(destination.index, 0, removed);

        const updatedColumns = {
          ...columns,
          [source.droppableId]: sourceTickets,
          [destination.droppableId]: destinationTickets,
        };

        setColumns(updatedColumns);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        <KanbanBoard columns={columnsArray} />
      </Board>
    </DragDropContext>
  );
};

const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 2rem;
  padding: 2rem 0;
  background-color: #ffffff;
  min-height: 100vh;
  width: 100%;
`;

export default KanbanBoardContainer;
