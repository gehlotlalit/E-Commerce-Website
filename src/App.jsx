import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./Components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allproduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashBoard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop/>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={
           <ProtectedRouteForUser>
            <UserDashboard />
           </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
             <ProtectedRouteForAdmin>
             <AddProductPage />
           </ProtectedRouteForAdmin>
          } />
          <Route path="/updateProduct/:id" element={
             <ProtectedRouteForAdmin>
             <UpdateProductPage />
           </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  );
}

export default App;