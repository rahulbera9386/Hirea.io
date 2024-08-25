import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Browse", path: "/browse" },
  ];
  const user = false;

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
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="p-4">
                  <div className="flex flex-col space-y-2">
                    <Button variant="ghost" as={Link} to="/profile">
                      View Profile
                    </Button>
                    <Button variant="outline">Logout</Button>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex space-x-4">
                <Button variant="secondary" className="">
                  Login
                </Button>

                <Button>SignUp</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
