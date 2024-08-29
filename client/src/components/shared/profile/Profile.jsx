import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, File, Mail, Pen, Phone } from "lucide-react";
import AppliedJobTable from "../table/AppliedJobTable";
import { Button } from "@/components/ui/button";
import UpdateProfile from "../updateprofile/UpdateProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 my-10">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
          <Avatar>
            <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullName} />
            <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex justify-between w-full">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">{user?.fullName}</h1>
              <p className="text-lg text-gray-600">Software Developer</p>
            </div>
            <Button variant="outline" className="border shadow-xl" onClick={() => setOpen(true)}>
              <Pen />
            </Button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Bio</h2>
          <p className="text-gray-600">{user?.profile?.bio}</p>
        </div>

        {/* Contact Information */}
        <div className="flex items-center space-x-4 mb-8">
          <Mail className="text-gray-600" />
          <p className="text-gray-600">{user?.email}</p>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <Phone className="text-gray-600" />
          <p className="text-gray-600">{user?.phoneNumber}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills.map((item, index) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resume</h2>
          <div className="flex items-center space-x-2">
            {user?.profile?.resume ? (
              <>
                <File className="text-gray-600" />
                <a
                  href={user.profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.profile.resumeOriginalName}
                </a>
                <Download className="text-gray-600" />
              </>
            ) : (
              <span className="text-gray-600">NA</span>
            )}
          </div>
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div>
        <h1 className="text-xl font-bold">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      {/* Update Profile Dialog */}
      <UpdateProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
