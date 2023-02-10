// import logo from './logo.svg';
// import ReactDOM  from 'react';
import './App.css';
import FormDhanabalan from './components/FormDhanabalan';
// import { Sweet } from './components/verfication purpose/verify';

// --------------------------------------------------------------------------------IMPORTS FOR THE FORM VALIDATION

// import FormValidation from './components/formValidation';

// --------------------------------------------------------------------------------IMPORTS FOR THE USECONTEXT

// import {Component1,Component2,Component3,Component4,Component5} from './components/usecontext';

// --------------------------------------------------------------------------------IMPORTS FOR THE ROUTING

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Routre from "./components/Routereg/routre";
// import Home from "./components/Routereg/home";
// import About from "./components/Routereg/about";
// import Contact from "./components/Routereg/contact";
// import Nopages from "./components/Routereg/nopages";
// import Blogs from './components/Routereg/blogs';

// --------------------------------------------------------------------------------IMPORTS FOR THE NESTED ROUTING

// import Nesting from "./components/nestedrouting/nesting";
// import Homepage from './components/nestedrouting/home';
// import Blogspage from "./components/nestedrouting/blogs";
// import Contactpage from "./components/nestedrouting/contact";
// import Aboutpage from "./components/nestedrouting/about";
// import Nopages from "./components/nestedrouting/nopages";
// import OurService from './components/nestedrouting/ourservice';
// import OurAchievements from './components/nestedrouting/ourachievements';
// import OurGallery from './components/nestedrouting/ourgallery';

// ------------------------------------------------------------------------------IMPORTS  FOR  THE USEPARAM

// import Signin from './components/Useparams';
// ------------------------------------------------------------------------------imports for the side nav bar
// import 'antd/dist/reset.css';
// import { Menu } from 'antd';

// import Home from './components/SidenavBar/Home';
// import Blogs from './components/SidenavBar/Blogs';
// import Service from './components/SidenavBar/Service';
// import Contact from './components/SidenavBar/Contact';
// import NoPages from './components/SidenavBar/NoPages';


// Side Navbar

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AuthProvider} from './components/Sidenav/Authentication';
// import Home from './components/Sidenav/Home';
// import Contact from './components/Sidenav/Contact'; 
// import SidebarExample from './components/Sidenav/SideNavbar';
// import Profile from './components/Sidenav/Profile';
// import Signin from './components/Sidenav/SignUp';
// import Required from './components/Sidenav/Required';
// import Nopages from './components/Sidenav/Nopages';
// import Login from './components/Sidenav/Login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* --------------------------The code for the Form Validation-----------------------------*/}
      <FormDhanabalan/>
      {/* <FormValidation/> */}
      {/* <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/> */}

      {/* ----------------------------------- The Codes for the routing   and the  USeparams------------------------------------------ */}

      {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Routre/>}>
              <Route index element={<Home />}/>
              <Route path="blogs" element={<Blogs/>}/> 
              <Route path="about" element={<About/>}/>
               <Route path='/Useparams/:firstname/:lastname' element={<Signin/>}></Route>
              <Route path="contact" element={<Contact/>}/>
              <Route path="*" element={<Nopages/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Sweet/> */}

      {/* ----------------------------------- The Codes for the nested routing------------------------------------------ */}


      {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Nesting/>}>
              <Route index element={<Homepage />}></Route>
              <Route path="blogs" element={<Blogspage/>}></Route>
              <Route path="about" element={<Aboutpage/>}>
                <Route path="OurService" element={<OurService/>}></Route>
                <Route path="OurAchievements" element={<OurAchievements/>}></Route>
                <Route path="OurGallery" element={<OurGallery/>}></Route>
              </Route>
              <Route path="contact" element={<Contactpage/>}/>
              <Route path="*" element={<Nopages/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}


      {/* Side NAVBAR */}
    {/* <Menu
    items={[
      {label:<Home/>},
      {label:<Blogs/>},
      {label:<Service/>},
      {label:<Contact/>},
      {label:<NoPages/>},
    ]}
    > */}

    {/* </Menu> */}

    {/* <AuthProvider>
      <BrowserRouter>
        <SidebarExample>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/profile' element={<Required><Profile /></Required>} />
            <Route path='/login' element={<Login />} />
            <Route path='/products/:Id' element={<Signin />} />
            <Route path='/products' element={<Signin />} />
            <Route path='*' element={<Nopages />} />


          </Routes>
        </SidebarExample>
      </BrowserRouter>
    </AuthProvider> */}

    
      
    </div>

    // Authentication Routing

  
    



    
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
