import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])

  const handleToggle =(e)=>{
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allTouristsSpot'>All Tourists Spot</NavLink></li>
    <li><NavLink to='/addTouristsSpot'>Add Tourists Spot</NavLink></li>
    <li><NavLink to='/myList'>My List</NavLink></li>
    <li><NavLink to='/weather'>Weather Widget</NavLink></li>
  </>

  const handleLogOut = () => {
    logOut()
      .then(res => { console.log(res.user) })
      .catch(err => { console.log(err) })
  }

  
  return (
    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="font-bold lg:text-3xl md:text-2xl text-xl">TripVoyage</a>

        <label className="grid cursor-pointer place-items-center ml-4">
          <input onChange={handleToggle}
            type="checkbox" className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
          <svg className="stroke-base-100 fill-base-100 col-start-1 row-start-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="5" />  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="stroke-base-100 fill-base-100 col-start-2 row-start-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-lg">
          {navLinks}
        </ul>
      </div>

      <div className="ml-6 lg:ml-60 md:ml-10 mt-4">
        {user ?
          <><div className="tooltip" data-tip={user?.displayName}>
            <img src={user?.photoURL}></img></div></>
          :
          <div></div>}
      </div>

      <div className="navbar-end lg:flex lg:flex-row md:flex-row flex-col gap-4 ml-5">
        {user ? <button onClick={handleLogOut} className="btn btn-neutral">Log out</button> :
          <><Link to='/register' className="btn btn-info">Register</Link>
            <Link to='/login' className="btn btn-accent">Login</Link></>}
      </div>
    </div>
  );
};

export default Navbar;