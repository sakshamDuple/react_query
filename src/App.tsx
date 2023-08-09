import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import HomeP from './component/Home.page';
import SupePage from './component/Supe.page';
import TradSupePage from './component/Trad.supe.page';

const queryClient = new QueryClient()

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomeP />} />
        <Route path="/supe" element={<SupePage />} />
        <Route path="/tradSupe" element={<TradSupePage />} />
      </Route>
    )
  )
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Header />
      <br />
      <div>
        <Outlet />
      </div>
      <br />
      <Footer />
    </>
  )
}

const Header = () => <nav>
  <ul className="menu App-header">
    <li className='NavItem'><Link to="/">Home</Link></li>
    <li className='NavItem'><Link to="/supe/">Show Supe By New Method</Link></li>
    <li className='NavItem'><Link to="/tradSupe/">Show By Traditional Method</Link></li>
  </ul>
</nav>

const Footer = () => <div>
  Footer Content
</div>

export default App;
