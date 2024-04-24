import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CompleteRegistration from './pages/CompleteRegistration';
import Create from './pages/Create';
import DescribeYou from './pages/DescribeYou';
import EmployerSignupForm from './pages/EmployerSignupForm';
import Estimate from './pages/Estimate';
import HomeLogin from './pages/HomeLogin';
import Mypage from './pages/Mypage';
import PostProject from './pages/Post-project';
import Signup from './pages/Signup';
import KanbanPage from './pages/kanban/KanbanPage';

function App() {
  const queryClient = new QueryClient();
  return (
  <>
  <QueryClientProvider client={queryClient}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete-registration" element={<CompleteRegistration />} />
        <Route path="/describeyou" element={<DescribeYou />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/kanban" element={<KanbanPage />} />
        <Route path="/signup-employer" element={<EmployerSignupForm />} />
        <Route path="/postproject" element={<PostProject />} />
        <Route path="/create" element={<Create />} />
        <Route path="/estimate" element={<Estimate />} />
      </Routes>
      </QueryClientProvider>
      </>
  );
}

export default App;