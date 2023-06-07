import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/MyPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Result from './pages/Result';
import Layout from './components/Layout/Layout';
import Search from './pages/Search';
import UserSelect from './pages/UserSelect';
import { SaveProvider } from "./contexts/SaveContext";
import { SaveItemContextProvider } from "./contexts/SaveItem";
import { SaveRecommendContextProvider} from './contexts/SaveRecommend';
import { ProductContextProvider } from "./contexts/Product";
import { AuthProvider } from './contexts/LoggendIn';

const App = () => {
  return (
    <AuthProvider>
    <SaveProvider>
      <SaveItemContextProvider>
        <SaveRecommendContextProvider>
          <ProductContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<Result />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mypage/*" element={<Mypage />} />
                <Route path="/userselectitem" element={<UserSelect />} />
              </Route>
            </Routes>
          </ProductContextProvider>
        </SaveRecommendContextProvider>
      </SaveItemContextProvider>
    </SaveProvider>
    </AuthProvider>
  );
};

export default App;

/*import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/MyPage';
import Login from './pages/Login';
import Result from './pages/Result';
import Layout from './components/Layout/Layout';
import Search from './pages/Search';
import UserSelect from './pages/UserSelect';
import { SaveProvider } from "./contexts/SaveContext";
import { SaveItemContextProvider } from "./contexts/SaveItem";
import { SaveRecommendContextProvider} from './contexts/SaveRecommend';
import { ProductContextProvider } from "./contexts/Product";

const App = () => {
  return (
    <SaveProvider>
      <SaveItemContextProvider>
        <SaveRecommendContextProvider>
          <ProductContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<Result />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage/*" element={<Mypage />} />
                <Route path="/userselectitem" element={<UserSelect />} />
              </Route>
            </Routes>
          </ProductContextProvider>
        </SaveRecommendContextProvider>
      </SaveItemContextProvider>
    </SaveProvider>
  );
};

export default App;*/