import { NavLink } from "react-router-dom";
import './header.css'
export default function Header() {
    return (
        <div className="flex justify-between items-center my-4">
            <div>
                <NavLink to="/" className="text-[#1A1919] text-[32px] font-bold">CareerHub</NavLink>
            </div>
            <div>
                <nav className="flex gap-4 text-[#757575] font-medium">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/appliedJobs">Applied jobs</NavLink>
                    <NavLink to="/Blogs">Blogs</NavLink>
                </nav>
            </div>
            <div>
                <NavLink to="/alljobs"><button className="w-[134px] p-3 font-medium text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md">Start Apply</button></NavLink>

            </div>
        </div>
    )
}
