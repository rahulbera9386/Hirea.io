import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "./../../../utills/constant";
import { toast } from "sonner";
import { setUser } from "../../../redux/auth/authSlice";

const UpdateProfile = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.auth);
  const [input, setInput] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills.map((skills) => skills) || [],
    file: user?.profile?.resume || null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`,formData, {
        headers: { "Content-type": "multipart/form-data" },
        withCredentials: true,
      });
      console.log("Profile updated successfully", res.data);
      const apiData = res.data;
      //console.log(apiData);
      if (apiData.success) {
        dispatch(setUser(apiData.userData));
        toast.success(apiData.message);
        setOpen(false);
        console.log(user)
      }
    } catch (error) {
      console.log("error", error);
      //toast.error(error.response.data.message);
    }

    
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent onInteractOutside={() => setOpen(false)}>
        <DialogHeader>
          <DialogTitle className="text-center">Update Profile</DialogTitle>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name:</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={input.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={input.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number:</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={input.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="bio">Bio:</Label>
              <Textarea
                id="bio"
                name="bio"
                value={input.bio}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="skills">Skills:</Label>
              <Input
                id="skills"
                name="skills"
                type="text"
                value={input.skills.join(", ")}
                onChange={(e) =>
                  setInput({
                    ...input,
                    skills: e.target.value
                      .split(",")
                      .map((skill) => skill.trim()),
                  })
                }
                placeholder="Separate skills with commas"
                required
              />
            </div>
            <div>
              <Label htmlFor="file">Resume:</Label>
              <Input
                id="file"
                name="file"
                type="file"
              
                onChange={(e) =>
                  setInput({ ...input, file: e.target.files[0] })
                }
                accept="application/pdf"
              />
            </div>
            <div className="text-center">
              <Button type="submit" className="bg-blue-600 text-white">
                Save Changes
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfile;
