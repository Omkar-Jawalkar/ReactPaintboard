import { RouterProvider } from 'react-router-dom';
import React from 'react';
import router from './routes/Router';

function App() {
   return (
      <React.Fragment>
         <RouterProvider router={router} />
      </React.Fragment>
   );
}

export default App;
