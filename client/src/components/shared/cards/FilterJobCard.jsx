import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterJobCard = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Filter Jobs</h1>
      <hr className="mb-4 border-gray-300" />
      <RadioGroup>
        {filterData.map((item, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{item.filterType}</h2>
            <div className="space-y-2">
              {item.array.map((option, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`${item.filterType}-${i}`} />
                  <Label htmlFor={`${item.filterType}-${i}`}>{option}</Label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterJobCard;
