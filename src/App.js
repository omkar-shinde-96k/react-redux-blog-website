import './App.scss';
import { CreatePost } from './pages/CreatePost';
import { Navbar } from './componants/Navbar';
import ReadMore from './pages/ReadMore';
import { PostByCategory } from './pages/PostByCategory';
import { CreateCategory } from './pages/CreateCategory';
import { AllPosts } from './pages/AllPosts';

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
            <Route path="/" element={<Navbar />}>
              <Route path="post/:postId" element={<ReadMore />} />
              <Route path=":catId" index element={<AllPosts />} />
              <Route index element={<AllPosts />} />
            </Route>

            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/addcategory" element={<CreateCategory />} />
            <Route path="/drawer" element={<ReadMore />} />
            <Route path="*" element={<h1>page not found</h1>} />

          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Outlet /> */}

    </>
  );
}

export default App;
