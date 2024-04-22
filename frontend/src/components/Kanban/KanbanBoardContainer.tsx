// KanbanBoardContainer.tsx
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { Columns, Tickets } from "../../interface/kanban/types";
import KanbanBoard from "./KanbanBoard";

const myColumns: Columns = [
  {
    id: "column-1",
    title: "To Do",
    tickets: [
      {
        id: "ticket-1",
        title: "Ticket 1",
        description: "Description for Ticket 1",
      },
      {
        id: "ticket-2",
        title: "Ticket 2",
        description: "Description for Ticket 2",
      },
    ],
  },
  {
    id: "column-2",
    title: "in-progress",
    tickets: [
      {
        id: "ticket-3",
        title: "Ticket 3",
        description: "Description for Ticket 1",
      },
    ],
  },
  {
    id: "column-3",
    title: "QA",
    tickets: [
      {
        id: "ticket-4",
        title: "Ticket 4",
        description: "Description for Ticket 1",
      },
      {
        id: "ticket-5",
        title: "Ticket 5",
        description: "Description for Ticket 1",
      },
    ],
  },
  {
    id: "column-4",
    title: "done",
    tickets: [
      {
        id: "ticket-6",
        title: "Ticket 6",
        description: "Description for Ticket 1",
      },
    ],
  },
];

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

const deepCopyColumns = myColumns.map((col) => ({
  ...col,
  tickets: [...col.tickets.map((ticket) => ({ ...ticket }))],
}));

const KanbanBoardContainer = () => {
  const [items, setItems] = useState<Columns>(deepCopyColumns);

  useEffect(() => {
    console.log("Items updated:", items);
  }, [items]);

  const onDragEnd = (result: DropResult) => {
    // 드롭 대상이 없는 경우
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    // 같은 droppable 내에서의 이동 // result.source 드래그 시작 위치, result.destination 드래그 끝 위치
    if (source.droppableId === destination.droppableId) {
      console.log("같은 droppable 내에서의 이동");
      const column = items.find((col) => col.id === source.droppableId);

      if (column) {
        const newTickets = reorder(
          column.tickets,
          source.index,
          destination.index
        );

        // items 배열 전체 업데이트
        const updatedItems = items.map((item) => {
          return item.id === column.id
            ? { ...item, tickets: newTickets } // 새로운 티켓 배열로 업데이트
            : { ...item }; // 변경이 없는 아이템은 새 객체로 복사
        });

        setItems([...updatedItems]);
      }
    } else {
      // 다른 droppable 간의 이동 // droppableId: '1', '2', '3', '4' : 각 index 는 0번부터 시작
      console.log("다른 droppable 간의 이동");
      // 1. 드래그 된 아이템이 뭔지를 알아야한다.
      // 2. destinationStage 와, 이동된 위치를 찾아서 해당 위치에 넣어주어야 한다.
      // 3. sourceStage 에서는 해당 아이템을 제거해주어야 한다.

      /*
      console.log("target", result.draggableId); // 현재 선택된 아이템
      console.log("source", result.source.droppableId); // 이동전 stage
      console.log("source index", result.source.index); // 이동전 index
      console.log("destination", result.destination?.droppableId); // 이동후 stage
      console.log("destination index", result.destination?.index); // 이동후 index
      */

      /*
      const sourceStage = items.find((stage) => stage.id === sourceId);
      const destinationStage = items.find(
        (stage) => stage.id === destinationId
      );
      */

      // 1. 드래그 된 아이템이 뭔지를 알아야한다.
      // 2. destinationStage 와, 이동된 위치를 찾아서 해당 위치에 넣어주어야 한다
      // 3. sourceStage 에서는 해당 아이템을 제거해주어야 한다.

      // const draggableId = result.draggableId; // 현재 선택된 아이템

      const sourceStageIndex = items.findIndex(
        (stage) => stage.id === source.droppableId
      );
      const destinationStageIndex = items.findIndex(
        (stage) => stage.id === destination.droppableId
      );
      const sourceStage = items[sourceStageIndex];
      const destinationStage = items[destinationStageIndex];

      const newSourceTasks = Array.from(sourceStage.tickets);
      const [removedTask] = newSourceTasks.splice(result.source.index, 1);

      const newDestinationTasks = Array.from(destinationStage.tickets);
      newDestinationTasks.splice(result.destination.index, 0, removedTask);

      // 새로운 배열을 생성해서 상태를 업데이트 해야된다.
      // 이동 전의 stage 는 newSourceTasks 로 업데이트
      // 이동 후의 stage 는 newDestinationTasks 로 업데이트

      const updatedItems = items.map((stage, index) => {
        if (index === sourceStageIndex) {
          return { ...stage, tickets: newSourceTasks };
        } else if (index === destinationStageIndex) {
          return { ...stage, tickets: newDestinationTasks };
        } else {
          return stage;
        }
      });

      setItems(updatedItems);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        <KanbanBoard columns={items} />
      </Board>
    </DragDropContext>
  );
};

const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  min-height: 100vh;
  width: 100%;
`;

export default KanbanBoardContainer;
