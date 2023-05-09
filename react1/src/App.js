import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/MyPage';
import Login from './pages/Login';
import Result from './pages/Result';
import Layout from './components/Layout/Layout';
import { SaveProvider } from "./contexts/SaveContext";
import { SaveItemContextProvider } from "./contexts/SaveItem";

const App = () => {
  return (
    <SaveProvider>
      <SaveItemContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage/*" element={<Mypage />} />
          </Route>
        </Routes>
      </SaveItemContextProvider>
    </SaveProvider>
  );
};

export default App;