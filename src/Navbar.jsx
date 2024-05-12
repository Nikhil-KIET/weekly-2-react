import { Link, Outlet } from "react-router-dom";
function Navbar(props){
    return (
        <div className=" flex flex-col items-center w-[70%] absolute right-0  bg-lime-200   my-10 rounded-lg ">
            
            <div className=" absolute right-0  bg-gray-800 text-white rounded-bl-lg  top-0  p-3 space-x-4 ">
            {
                <Link to="/about">About</Link>
                
            }
            {
                <Link to="/certificates">Certiifications</Link>
                
            }
            {
                <Link to="/about">Projects</Link>
                
            }
            {
                <Link to="/about">More</Link>
                
            }
            </div>
            {props.children}
        </div>
        
    )
}
export default Navbar;