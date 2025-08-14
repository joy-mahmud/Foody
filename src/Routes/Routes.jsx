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
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Register />
            },
            {
                path: 'add-food',
                element: <AdminRoute><AddFoodItem /></AdminRoute>
            },
            {
                path: 'update-food/:id',
                element: <UpdateFoodItem />
            }
        ]
    },
]);

export default router