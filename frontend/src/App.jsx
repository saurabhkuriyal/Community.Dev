
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HandlePost from './components/AdminComponents/HandlePost';
import HandleUser from './components/AdminComponents/HandleUser';
import Messages from './components/AdminComponents/Messages';
import Newsletters from './components/AdminComponents/Newsletters';
import Overview from './components/AdminComponents/Overview';
import Edit from './components/Edit';
import { Fotter } from './components/Fotter';
import Navbar from './components/navbar';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import UnderDevelopment from './components/UnderDevelopment';
import { About } from './pages/About';
import AddBooks from './pages/AddBooks';
import AdminLayout from './pages/AdminLayout';
import AllBlogs from './pages/AllBlogs';
import { Blog } from './pages/Blog';
import Bookmarks from './pages/Bookmarks';
import Contact from './pages/Contact';
import DashboardRedirect from './pages/DashboardRedirects';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import TermofUse from './pages/TermofUse';
import UserDashboard from './pages/UserDashboard';
import UserLayout from './pages/UserLayout';
import UserOverview from './pages/UserOverview';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
            
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/underdevelopment' element={<UnderDevelopment/>}/>
            <Route path='/termofuse' element={<TermofUse/>}/>
            
            <Route element={<ProtectedRoute/>}>
            
            {/* Admin Dashbord routes */}
            <Route path='/admin/dashboard' element={<AdminLayout />}>
            
            <Route  index element={<Overview/>} />
            <Route path='post' element={<HandlePost />} />
            <Route path='users' element={<HandleUser />} />
            <Route path='newsletter' element={<Newsletters/>}/>
            <Route path='messages' element={<Messages/>}/>
            
            </Route>
            
            <Route path='/dashboardredirects' element={<DashboardRedirect/>}/>
            
            {/* user Dshboard */}
            <Route path='/user/layout' element={<UserLayout/>}>
              <Route index element={<UserOverview/>}/>
              <Route path='dashboard' element={<UserDashboard/>}/>
              <Route path='bookmarks' element={<Bookmarks/>}/>
            </Route>

            
            <Route path='/specificblog/:id' element={<Blog/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/add/blog' element={<AddBooks/>} />
            <Route path='/getAllBlogs' element={<AllBlogs/>} />
            <Route path='/user/profile' element={<Profile/>}/>
            <Route path='/update/blog/:id' element={<Edit/>}/>
            </Route>
      </Routes>
      <Fotter/>
      </BrowserRouter>
    </>
  )
}

export default App
