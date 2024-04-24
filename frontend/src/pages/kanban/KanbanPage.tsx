import { useState } from "react";
import styled from "styled-components";
import KanbanBoardContainer from "../../components/Kanban/KanbanBoardContainer";

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
      // 추가 스프린트 구성
    ],
  },
  // 추가 프로젝트 구성
];

const KanbanPage = () => {
  const [currentProjectId, setCurrentProjectId] = useState(projects[0].id);
  const [currentSprintId, setCurrentSprintId] = useState(
    projects[0].sprints[0].id
  );

  const currentProject = projects.find(
    (project) => project.id === currentProjectId
  );
  const currentSprint = currentProject?.sprints.find(
    (sprint) => sprint.id === currentSprintId
  );
  const currentTickets = currentSprint?.tickets || [];

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newProjectId = parseInt(e.target.value, 10);
    setCurrentProjectId(newProjectId);
    const newProject = projects.find((project) => project.id === newProjectId);
    if (newProject && newProject.sprints[0]) {
      setCurrentSprintId(newProject.sprints[0].id);
    }
  };

  const handleSprintChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSprintId = parseInt(e.target.value, 10);
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
          <KanbanBoardContainer initialTickets={currentTickets} />
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
