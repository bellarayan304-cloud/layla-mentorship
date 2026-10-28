import e from "express";
import cloudinary from "../utils/cloudinary.js";
import { success } from "zod";

export const uploudFile=(req,res)=>{
    if(!req.file){
        return res.status(400).json({message: "no uplouded file"})
    }

    const stream=cloudinary.uploader.upload_stream(
       { folder: "dugsiiye_upload", resource_type: "image" },
    (error, result)=>{
        if(error) return next(e)


            return res.status(201).json({
                success:true,
                fileUrl:result.secure_url
            })
    })
    stream.end(req.file.buffer)
}