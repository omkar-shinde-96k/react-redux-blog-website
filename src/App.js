import './App.css';
import Homepage from './pages/Homepage';
import { CreatePost } from './pages/CreatePost';
import { Navbar } from './componants/Navbar';
import ReadMore from './pages/ReadMore';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

const Enter = () => {
  return (
    <div>
      enter
    </div>
  )
}
const Soprts = () => {
  return (
    <div>
      sport
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Homepage />}>
            <Route index element={<Homepage />} />
          </Route>
          <Route path="createpost" element={<CreatePost />} />
          <Route path="readmore" element={<ReadMore />} />
        </Routes>
      </BrowserRouter>

      <Outlet/>

    </>
  );
}

export default App;
