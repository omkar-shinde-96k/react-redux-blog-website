import './App.css';
import Homepage from './pages/Homepage';
import { CreatePost } from './pages/CreatePost';
import { Navbar } from './componants/Navbar';
import ReadMore from './pages/ReadMore';
import { PostByCategory } from './pages/PostByCategory';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>


          <Route path="/" element={<Navbar />}>

            <Route path="/" element={<Homepage />}>
              <Route path=":catId" element={<PostByCategory />} />
              <Route path="post/:postId" element={<ReadMore />} />
              <Route index element={<h1>popular</h1>} />
            </Route>

            <Route path="/createpost" element={<CreatePost />} />
            <Route path="*" element={<h1>page not found</h1>} />

          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Outlet /> */}

    </>
  );
}

export default App;
