import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
// import FramerMotionPractice from '../pages/FramerMotionPractice/FramerMotionPractice';

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainPage />,
   },
   // {
   //    path: '/',
   //    element: <FramerMotionPractice />,
   // },
]);

export default router;
