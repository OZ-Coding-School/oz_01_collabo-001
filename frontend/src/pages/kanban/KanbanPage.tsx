import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import KanbanBoardContainer from "../../components/Kanban/KanbanBoardContainer";
import { Tickets } from "../../interface/kanban/types";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    sprints: [
      {
        id: 101,
        title: "Sprint 101",
        description: "Description of Sprint 101",
        tickets: [
          {
            id: "1001",
            title: "Ticket 1",
            description: "Fix bug in login",
            condition: "todo",
          },
          {
            id: "1002",
            title: "Ticket 2",
            description: "Add new feature",
            condition: "in_progress",
          },
        ],
      },
      {
        id: 102,
        title: "Sprint 102",
        description: "Description of Sprint 102",
        tickets: [
          {
            id: "1003",
            title: "Ticket 3",
            description: "Improve performance",
            condition: "done",
          },
          {
            id: "1004",
            title: "Ticket 4",
            description: "Refactor code",
            condition: "todo",
          },
          {
            id: "1005",
            title: "Ticket 5",
            description: "Add unit tests",
            condition: "in_progress",
          },
        ],
      },
      {
        id: 103,
        title: "Sprint 103",
        description: "Description of Sprint 103",
        tickets: [
          {
            id: "1006",
            title: "Ticket 6",
            description: "Implement logging",
            condition: "todo",
          },
          {
            id: "1007",
            title: "Ticket 7",
            description: "Create documentation",
            condition: "in_progress",
          },
          {
            id: "1008",
            title: "Ticket 8",
            description: "Deploy to staging",
            condition: "todo",
          },
          {
            id: "1009",
            title: "Ticket 9",
            description: "Fix critical bugs",
            condition: "in_progress",
          },
          {
            id: "1010",
            title: "Ticket 10",
            description: "Integrate with third-party API",
            condition: "todo",
          },
        ],
      },
    ],
  },
];

const KanbanPage = () => {
  const [currentProjectId, setCurrentProjectId] = useState(projects[0].id);
  const [currentSprintId, setCurrentSprintId] = useState(
    projects[0].sprints[0].id
  );
  const [currentTickets, setCurrentTickets] = useState<Tickets>(
    projects[0].sprints[0].tickets
  );
  const currentTicketsMemo = useMemo(() => currentTickets, [currentTickets]);

  useEffect(() => {
    console.log("Project ID 변경:", currentProjectId);
    const project = projects.find((p) => p.id === currentProjectId);
    console.log("찾은 프로젝트:", project);
    const sprint = project?.sprints.find((s) => s.id === currentSprintId);
    console.log("찾은 스프린트:", sprint);
    if (sprint) {
      console.log("스프린트의 티켓:", sprint.tickets);
      setCurrentTickets(sprint.tickets);
    }
  }, [currentProjectId, currentSprintId]);

  const currentProject = projects.find(
    (project) => project.id === currentProjectId
  );

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newProjectId = parseInt(e.target.value, 10);
    console.log("프로젝트 변경:", newProjectId);
    setCurrentProjectId(newProjectId);
  };

  const handleSprintChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSprintId = parseInt(e.target.value, 10);
    console.log("스프린트 변경:", newSprintId);
    setCurrentSprintId(newSprintId);
  };

  return (
    <PageContainer>
      <MainContent>
        <ProjectSection>
          <div className="project" style={{ width: "100%" }}>
            <select name="project" id="project" onChange={handleProjectChange}>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
            <button className="btn">Add Ticket</button>
          </div>
          <div className="sprint" style={{ width: "100%" }}>
            <select name="sprint" id="sprint" onChange={handleSprintChange}>
              {currentProject?.sprints.map((sprint) => (
                <option key={sprint.id} value={sprint.id}>
                  {sprint.title}
                </option>
              ))}
            </select>
            <button className="btn">Backlog tickets</button>
            <button className="btn">Closed tickets</button>
          </div>
        </ProjectSection>
        <BoardSection>
          <KanbanBoardContainer
            key={currentSprintId}
            initialTickets={currentTicketsMemo}
          />
        </BoardSection>
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin-top: 100px;
`;

const MainContent = styled.main`
  flex-grow: 1;
  max-width: 1280px;
`;

const ProjectSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 0.5rem;

  .project,
  .sprint {
    margin: 0 1rem;
    display: flex;
    align-items: center;

    select {
      padding: 0.5rem;
      margin-right: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .btn {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const BoardSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* Other styles */
`;

export default KanbanPage;
