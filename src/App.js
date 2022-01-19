import './App.scss';
import { CreatePost } from './pages/CreatePost';
import { Navbar } from './componants/Navbar';  
import { CreateCategory } from './pages/CreateCategory';
import { AllPosts } from './pages/AllPosts';

import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Navbar />}> 
              <Route path=":catId" index element={<AllPosts />} />
              <Route index element={<AllPosts />} />
            </Route>

            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/addcategory" element={<CreateCategory />} /> 
            <Route path="*" element={<h1>page not found</h1>} />

          </Route>
        </Routes>
      </BrowserRouter> 

    </>
  );
}

export default App;
