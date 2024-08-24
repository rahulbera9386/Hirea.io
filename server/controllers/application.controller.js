import Job from "../models/job.model.js";
import Application from "./../models/application.model.js";

const applyJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const userId = req.id;
    const job = await Job.findById(jobId);
    if (!job) {
      res.status(400).json({ message: "Job Not Found", success: false });
    }
    const existingApplications = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplications) {
      res
        .status(400)
        .json({
          message: "You have alraedy applied for this job",
          success: false,
        });
    }

    const newApplication = await new Application({
      job: jobId,
      applicant: userId,
    });
    await newApplication.save();

    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "Job applied successfully.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res.status(404).json({
        message: "No Applications",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      succees: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "status is required",
        success: false,
      });
    }

    // find the application by applicantion id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "Application not found.",
        success: false,
      });
    }

    // update the status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { applyJob, getAppliedJobs, getApplicants, updateStatus };
