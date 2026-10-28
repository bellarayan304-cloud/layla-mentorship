import Task from "../model/Task.js";

export const creatTask = async (req, res, next)=>{
    try {
     const task = await Task.create({...req.body,createdBy: req.user._id})
        res.status(201).json(task)
    } catch (error) {

     next(error);
    }
}


export const getTask =async(req, res, next)=>{
    try {
        const task = await Task.find({createdBy: req.user._id})
        res.json(task)
        
    } catch (error) {
        next(error)
        
    }
}

export const updateTask = async(req,res,next)=>{
    try {
        const task =await Task.findOneAndUpdate(
            {_id: req.params.id, createdBy:req.user._id},
            req.body,
            {new:true}
             );
            if(!task) return res.status(404).json("no task foanded")
       
        
    } catch (error) {
        next(error)
        
    }
}
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id
    });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};





