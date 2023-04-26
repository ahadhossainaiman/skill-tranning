
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/route/Route';

function App() {
  return (
    <div className="App" data-theme="dark">
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
