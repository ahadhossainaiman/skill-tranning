
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App" data-theme="dark">
     <RouterProvider router={routes}></RouterProvider>
     <Toaster />
    </div>
  );
}

export default App;
