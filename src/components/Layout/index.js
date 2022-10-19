import TopMenu from '../TopMenu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='App'>
      <TopMenu />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout