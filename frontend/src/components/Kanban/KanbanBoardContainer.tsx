// KanbanBoardContainer.tsx
import styled from "styled-components";
import { Column } from "../../interface/kanban/types";
import KanbanBoard from "./KanbanBoard";

const myColumns: Column[] = [
  {
    id: "column-1",
    title: "To Do",
    tickets: [
      {
        id: "ticket-1",
        title: "Ticket 1",
        description: "Description for Ticket 1",
        date: "Feb 2",
        users: [{ name: "User1" }],
      },
      {
        id: "ticket-2",
        title: "Ticket 2",
        description: "Description for Ticket 1",
        date: "Feb 2",
        users: [{ name: "User1" }],
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
        date: "Feb 2",
        users: [{ name: "User1" }],
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
        date: "Feb 2",
        users: [{ name: "User1" }],
      },
      {
        id: "ticket-5",
        title: "Ticket 5",
        description: "Description for Ticket 1",
        date: "Feb 2",
        users: [{ name: "User1" }],
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
        date: "Feb 2",
        users: [{ name: "User1" }],
      },
    ],
  },
];

const KanbanBoardContainer = () => {
  return (
    <Board>
      <KanbanBoard columns={myColumns} />
    </Board>
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
