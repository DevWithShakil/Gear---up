import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import Blogs from "./components/Pages/Blogs/Blogs";
import Home from "./components/Pages/Home/Home/Home";
import Services from "./components/Pages/Home/Services";
import Login from "./components/Pages/Login/Login";
import RequireAuth from "./components/Pages/Login/RequireAuth/RequireAuth";
import Register from "./components/Pages/Login/Register/Register";
import ServiceDetail from "./components/Pages/ServiceDetail/ServiceDetail";
import Checkout from "./components/Pages/Checkout/Checkout";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Header from "./components/Pages/Shared/Header";
import NotFound from "./components/Pages/Shared/NotFound/NotFound";
import ManageInventory from "./components/Pages/Home/Home/ManageInventory";
import AddItem from "./components/Pages/Home/Home/AddItem/AddItem";
import Mypost from "./components/Pages/Home/Home/Mypost/Mypost";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route
          path='/manageinventory'
          element={
            <RequireAuth>
              <ManageInventory ></ManageInventory>
            </RequireAuth>
          }
        />
        <Route
          path='/additem'
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        />
        <Route
          path='/mypost'
          element={
            <RequireAuth>
              <Mypost></Mypost>
            </RequireAuth>
          }
        />
        <Route path="*" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
