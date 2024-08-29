import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, File, Mail, Pen, Phone } from "lucide-react";
import AppliedJobTable from "../table/AppliedJobTable";
import { Button } from "@/components/ui/button";

const skillsData = ["Java", "React", "Node"];
const isResume = true;

const Profile = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 my-10">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aEGesafKMJbW_OQPl97INDHAHt25yRbLNQ&s" />
            <AvatarFallback>RB</AvatarFallback>
          </Avatar>
          <div className="flex justify-between gap-11">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">
                Rahul Bera
              </h1>
              <p className="text-lg text-gray-600">Software Developer</p>
            </div>

            <div>
              <Button variant="outline" className="border shadow-xl">
                <Pen />
              </Button>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Bio</h2>
          <p className="text-gray-600">
            I am a passionate software engineer with experience in building
            scalable and efficient web applications. I am always eager to learn
            new technologies and take on challenging projects.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex items-center space-x-4 mb-8">
          <Mail className="text-gray-600" />
          <p className="text-gray-600">rahul@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <Phone className="text-gray-600" />
          <p className="text-gray-600">9382898643</p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skillsData.map((item, index) => (
              <Badge key={index} className="bg-blue-100 text-blue-800">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resume</h2>
          <div className="flex items-center space-x-2">
            {isResume ? (
              <>
                <File className="text-gray-600" />
                <a
                  href="https://healthvectors.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Rahul.pdf
                </a>
                <Download className="text-gray-600" />
              </>
            ) : (
              <span className="text-gray-600">NA</span>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-xl font-bold ">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;
