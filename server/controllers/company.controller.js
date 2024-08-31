import Company from "./../models/company.model.js";
import getDataUri from "./../utills/dataUri.js";
import cloudinary from "./../utills/cloudinary.js";

const registerCompany = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Please Enter Company Name", success: false });
    }
    let company = await Company.findOne({ name });
    if (company) {
      res
        .status(400)
        .json({ message: "Company Already Registered", success: false });
    }
    company = new Company({
      name,
      userId: req.id,
    });
    await company.save();
    //console.log(company)
    res.status(200).json({
      message: "Company Created Successfully",
      success: true,
      company,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error While Trying To register company",
      error: error.message,
    });
  }
};

const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies || companies.length === 0) {
      return res.status(404).json({
        message: "Companies Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Companies Found Successfully",
      success: true,
      companies,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error While Trying To get company details",
      error: error.message,
      companies
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "Company Not Found",
        success: false,
      });
    }
    return res
      .status(200)
      .json({ message: "Company Found Successfully", success: true, company });
  } catch (error) {
    return res.status(500).json({
      message: "Error While Trying To get company details",
      error: error.message,
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    
    const file = req.file;
    let logo;
    if(file)
    {
        const fileUri = getDataUri(file);
        const cloudinaryResponse = await cloudinary.uploader.upload(
          fileUri.content
        );
       logo = cloudinaryResponse.secure_url;
    }
    
   
    const updateddata = { name, description, website, location, logo };
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      updateddata,
      { new: "true" }
    );
    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company information updated.",
      success: true,
      company
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error While Trying To Update company details",
      error: error.message,
    });
  }
};

export { registerCompany, getCompany, getCompanyById ,updateCompany};
