import { FaHome, FaInfoCircle, FaMicrophone } from "react-icons/fa";
import {Link } from 'react-router-dom';

function Header() {
    const navItems =[
        {name:'Home', icon:FaHome, path:'/home' },
        {name:'Voice', icon:FaMicrophone, path:'/voice' },
        {name:'About', icon:FaInfoCircle, path:'/about' }
    ]
    return (
      <div className="header container-fluid">
        <header className="bg-neutral-700 text-white">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="logo">
                    <img src="https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g" alt="logo" className="w-12 h-12 border-4 rounded-xl border-gray-800" />
                </div>
                <nav className="flex space-x-8">
                    {navItems.map((item)=> ( <Link key={item.name} to={item.path} className="flex items-center hover:text-gray-400"><span className="ml-2"><item.icon />{item.name}</span></Link>))}
                </nav>
            </div>
        </header>
      </div>
    );
  }
  
  export default Header;
  