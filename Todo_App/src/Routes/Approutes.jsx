import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import Dashboard from '../Pages/Dashboard';
import Todo from '../Pages/Todo';
import Notes from '../Pages/Notes';
import Settings from '../Pages/Settings';


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Dashboard/>
            },
            {
                path:"todo",
                element:<Todo/>
            },
            {
                path:"notes",
                element:<Notes/>
            },
            {
                path:"settings",
                element:<Settings/>
            }
        ]
    }
])