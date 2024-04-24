import styled from "styled-components";
import KanbanBoardContainer from "../../components/Kanban/KanbanBoardContainer";

const KanbanPage = () => {
  return (
    <Board>
      <PageContainer>
        <NavigationBar>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#">My Account</a>
            </li>
            <li className="nav__item">
              <a href="#">Hire Talent</a>
            </li>
            <li className="nav__item">
              <a href="#">Find Work</a>
            </li>
          </ul>
        </NavigationBar>
        {/* main */}
        <MainContent>
          <ProjectSection>
            <div className="project" style={{ width: "100%" }}>
              <select name="project" id="project">
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
                <option value="project3">Project 3</option>
              </select>
              <button className="btn">Add Ticket</button>
            </div>
            <div className="sprint" style={{ width: "100%" }}>
              <select name="sprint" id="sprint">
                <option value="sprint123">
                  Sprint 123(20xx-xx-xx~20xx-xx-xx)
                </option>
                <option value="sprint234">
                  Sprint 234(20xx-xx-xx~20xx-xx-xx)
                </option>
                <option value="sprint345">
                  Sprint 345(20xx-xx-xx~20xx-xx-xx)
                </option>
              </select>
              <button className="btn">Backlog tickets</button>
              <button className="btn">Closed tickets</button>
            </div>
          </ProjectSection>
          <BoardSection>
            <Column>
              <Header>
                <Title>1. To Do</Title>
              </Header>
              <div className="ticket">Ticket 1</div>
            </Column>
            {/*  */}
            <Column>
              <Header>
                <Title>2. In progress</Title>
              </Header>
              <div className="ticket">Ticket 1</div>
            </Column>
            {/*  */}
            <Column>
              <Header>
                <Title>3. In QA</Title>
              </Header>
              <div className="ticket">Ticket 1</div>
            </Column>
            {/*  */}
            <Column>
              <Header>
                <Title>4. Done</Title>
              </Header>
              <div className="ticket">Ticket 1</div>
            </Column>
          </BoardSection>
        </MainContent>
      </PageContainer>
    </Board>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex-grow: 1;
  width: 80vw;
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
