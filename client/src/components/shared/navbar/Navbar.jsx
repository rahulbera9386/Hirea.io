import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "./../../../utills/constant";
import { setUser } from '../../../redux/auth/authSlice';

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Browse", path: "/browse" },
  ];
  // const user = false;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //console.log(user);
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      const apiData = res.data;
      if (apiData.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(apiData.message);
      }
    } catch (error) {
      toast.error(error.reponse.data.message);
    }
  };
  return (
    <nav className="bg-white sticky top-0 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="text-2xl font-bold text-gray-800">
          <h1>
            <Link to="/">
              Hire.<span className="text-primary">io</span>
            </Link>
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-gray-600">
            {navLinks.map((item, key) => (
              <li key={key} className="relative group">
                <Link
                  to={item.path}
                  className="hover:text-primary transition duration-300"
                >
                  {item.name}
                  <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* User Login/Avatar */}
          <div>
            {user ? (
              <Popover>
                <PopoverTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.profile.profilePhoto} />
                    <AvatarFallback>Rahul</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="p-4">
                  <div className="flex flex-col space-y-2">
                    <Button variant="ghost" as={Link} to="/profile">
                    <Link to="/profile">View Profile</Link>
                      
                    </Button>
                    <Button variant="outline" onClick={logoutHandler}>
                      Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex space-x-4">
                <Button variant="secondary" className="">
                  <Link to="/login">Login</Link>
                </Button>

                <Button>
                  <Link to="/signup"> SignUp</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
