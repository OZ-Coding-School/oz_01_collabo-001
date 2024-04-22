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
            {/* 
            <Column>
              <Header>
                <Title>1. To Do</Title>
              </Header>
              <div className="ticket">Ticket 1</div>
            </Column>
            <Column>
              <Header>
                <Title>2. In progress</Title>
              </Header>
              <div className="ticket">Ticket 1</div>
            </Column>
            <Column>
              <Header>
                <Title>3. In QA</Title>
              </Header>
              <div className="ticket">Ticket 1</div>
            </Column>
            <Column>
              <Header>
                <Title>4. Done</Title>
              </Header>
              <div className="ticket">Ticket 1</div>
            </Column>
          */}
            {/* <Kanban /> */}
            <KanbanBoardContainer />
          </BoardSection>
        </MainContent>
      </PageContainer>
    </Board>
  );
};

const Board = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0;
  background: #eaeaea;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
  width: 100%;
`;

const NavigationBar = styled.nav`
  width: 100%;
  padding: 1rem 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
  }

  a {
    text-decoration: none;
    color: #333;
    padding: 0.5rem 1rem;
    &:hover {
      color: #007bff;
    }
  }
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

/*
const Column = styled.div`
  flex-grow: 1;
  width: 25%%;
  margin: 0 0.5rem;
  background: #fff;
  border-radius: 4px;
  padding: 1rem;
  min-height: 300px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
`;

*/

export default KanbanPage;
