import multer from "multer";
const storage =multer.memoryStorage()

export const uploud =multer({
    storage,
    limits: {fieldSize: 10*1024*1024}
})