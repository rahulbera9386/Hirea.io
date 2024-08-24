import Job from "./../models/job.model.js";
import Company from './../models/company.model.js';

const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      experienceLevel,
      location,
      jobType,
      position,
      companyId,
    } = req.body;

    const company=await Company.findById(companyId);
    //console.log(company);
    if(company.userId != req.user._id)
    {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to post a job for this company",
      });
    }
    if (!title) {
      return res
        .status(400)
        .json({ message: "Please Enter Job Title", success: false });
    }
    if (!description) {
      return res
        .status(400)
        .json({ message: "Please Enter Job Description", success: false });
    }
    if (!requirements) {
      return res
        .status(400)
        .json({ message: "Please Enter Job requirements", success: false });
    }
    if (!salary) {
      return res
        .status(400)
        .json({ message: "Please Enter Job Salary", success: false });
    }
    if (!experienceLevel) {
      return res
        .status(400)
        .json({ message: "Please Enter Job experienceLevel", success: false });
    }
    if (!location) {
      return res
        .status(400)
        .json({ message: "Please Enter Job location", success: false });
    }
    if (!jobType) {
      return res
        .status(400)
        .json({ message: "Please Enter jobType", success: false });
    }
    if (!position) {
      return res
        .status(400)
        .json({ message: "Please Enter Job Position", success: false });
    }
    if (!companyId) {
      return (
        res.
        status(400).json({
          message: "Please Enter Company Name",
          success: false,
        })
      );
    }

    const job = await new Job({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      experienceLevel,
      location,
      jobType,
      position,
      company: companyId,
      created_by: req.id,
    });

    await job.save();
    const populatedJob = await Job.findById(job._id)
    .populate({ path: "company" })
    .populate({ path: "created_by" });
    return res
      .status(200)
      .json({ message: "Job Posted Successfully", success: true, job:populatedJob });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        {
          description: { $regex: keyword, $options: "i" },
        },
      ],
    };

    const jobs = await Job.find(query);
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }
    res
      .status(200)
      .json({ message: "Job Found Successfully", jobs, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }
    res
      .status(200)
      .json({ message: "Job Found Successfully", job, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }
    res
      .status(200)
      .json({ message: "Jobs Found Successfully", jobs, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { postJob, getAllJobs, getJobById, getAdminJobs };
