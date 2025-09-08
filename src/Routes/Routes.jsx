import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";
import UpdateFoodItem from "../Pages/UpdateFoodItem/UpdateFoodItem";
import FoodsCategory from "../Pages/FoodsCategory/FoodsCategory";
import CartPage from "../Pages/CartPage/CartPage";
import AdminRoute from "../privateRoutes/AdminRoute";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashBoardAllFoods from "../Pages/Dashboard/DashBoardAllFoods";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import DashBoardAllUsers from "../Pages/Dashboard/DashBoardAllUsers";
import PaymentPage from "../Pages/Payment/PaymentPage";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'allfoods',
                element: <AllFoods />
            },
            {
                path: 'category/:cat',
                element: <FoodsCategory />
            },
            {
                path: 'cart',
                element: <CartPage />
            },
            {
                path: 'payment',
                element: <PaymentPage />
            },
            {
                path: 'payment/success',
                element: <PaymentSuccess />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Register />
            }

        ]
    },
    {
        path: 'dashboard',
        element: <AdminRoute><DashBoardLayout /></AdminRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'dashboard-home',
                element: <AdminRoute><DashboardHome /></AdminRoute>
            },
            {
                path: 'add-food',
                element: <AdminRoute><AddFoodItem /></AdminRoute>
            },
            {
                path: 'update-food/:id',
                element: <AdminRoute><UpdateFoodItem /></AdminRoute>
            },
            {
                path: 'all-foods',
                element: <AdminRoute> <DashBoardAllFoods /></AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute><DashBoardAllUsers /></AdminRoute>
            }
        ]
    }
]);

export default router