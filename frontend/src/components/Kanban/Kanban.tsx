import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import "../../style/kanban/Kanban.css";

/*
type Hooks = {
    onDragStart?: (id: DraggableId, location: DraggableLocation) => void,
    onDragEnd: (result: DropResult) => void,
  }
  
  type Props = Hooks & {
    children?: ReactElement,
  }



*/

// onDragEnd: (result: DropResult) => void;

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

// type DraggableStyle = DraggingStyle | NotDraggingStyle;

interface Stage {
  id: string;
  title: string;
  tasks: string[];
}

const stages = [
  { id: "1", title: "확인", tasks: ["Task 1", "Task 2", "Task 3"] },
  { id: "2", title: "진행 중", tasks: ["Task 4", "Task 5"] },
  { id: "3", title: "검토 중", tasks: ["Task 6"] },
  { id: "4", title: "완료", tasks: ["Task 7", "Task 8", "Task 9"] },
];

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

const reorder = (
  //   list: Stage[],
  list: string[],
  startIndex: number,
  endIndex: number
): string[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Kanban = () => {
  const [items, setItems] = useState<Stage[]>(stages);

  const onDragEnd = (result: DropResult) => {
    // 드롭 대상이 없는 경우
    if (!result.destination) {
      return;
    }

    const sourceId = result.source.droppableId; // 현재 선택된 아이템의 섹션 droppableId
    const destinationId = result.destination.droppableId; // 드래그 후 이동된 아이템의 섹션 droppableId

    // 같은 droppable 내에서의 이동 // result.source 드래그 시작 위치, result.destination 드래그 끝 위치
    if (sourceId === destinationId) {
      console.log("같은 droppable 내에서의 이동");
      const updatedStage = items.find(
        (stage) => stage.id === result.source.droppableId
      );
      console.log("updatedStage", updatedStage);
      if (updatedStage) {
        const reorderedTasks = reorder(
          updatedStage.tasks,
          result.source.index,
          result.destination.index
        );
        console.log("reorderedTasks", reorderedTasks);
        const updatedItems = items.map((stage) => {
          //   console.log("stage.id", stage.id);
          //   console.log("updatedStage.id", updatedStage.id);
          return stage.id === updatedStage.id
            ? { ...stage, tasks: reorderedTasks }
            : stage;
        });
        console.log("updatedItems", updatedItems);
        setItems(updatedItems);
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
        (stage) => stage.id === sourceId
      );
      const destinationStageIndex = items.findIndex(
        (stage) => stage.id === destinationId
      );
      const sourceStage = items[sourceStageIndex];
      const destinationStage = items[destinationStageIndex];

      const newSourceTasks = Array.from(sourceStage.tasks);
      const [removedTask] = newSourceTasks.splice(result.source.index, 1);

      const newDestinationTasks = Array.from(destinationStage.tasks);
      newDestinationTasks.splice(result.destination.index, 0, removedTask);

      // 새로운 배열을 생성해서 상태를 업데이트 해야된다.
      // 이동 전의 stage 는 newSourceTasks 로 업데이트
      // 이동 후의 stage 는 newDestinationTasks 로 업데이트

      const updatedItems = items.map((stage, index) => {
        if (index === sourceStageIndex) {
          return { ...stage, tasks: newSourceTasks };
        } else if (index === destinationStageIndex) {
          return { ...stage, tasks: newDestinationTasks };
        } else {
          return stage;
        }
      });

      setItems(updatedItems);
    }

    /*
    const updatedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(updatedItems);
    */
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="workflow-container">
        {items.map((stage) => (
          <Droppable droppableId={stage.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                key={stage.id}
                className="stage"
              >
                <h3 className="stage-title">{`${stage.id}. ${stage.title}`}</h3>
                {stage.tasks.map((task, index) => (
                  <Draggable key={task} draggableId={task} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="task"
                        ref={provided.innerRef}
                        style={getItemStyle(
                          provided.draggableProps.style,
                          snapshot.isDragging
                        )}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className="task-id">#BD-123</span>
                        <span className="task-description">{task}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;

/*
    DragDropContext는 드래그 앤 드랍을 사용하기위한 영역을 지정해주는것이고
    Droppable은 드랍한 요소들을 놓을수있는곳이다.
    Draggble은 드랍 요소들을 뜻한다.
    출처: https://victory-ju.tistory.com/entry/react-beautiful-dnd로-드래그-만들기-TypeScript [아 그거 뭐였지:티스토리]
*/
