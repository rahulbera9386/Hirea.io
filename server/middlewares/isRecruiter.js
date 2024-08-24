const isRecruiter=async(req,res,next)=>{
    if (req.user.role !== 'recruiter') {
        return res.status(403).json({
          success: false,
          message: 'Only recruiters are authorized to perform this action'
        });
      }
      
      next();
}


export default isRecruiter;