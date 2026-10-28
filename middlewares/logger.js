export const logger = (res,req, next)=>{
console.log(`[${new Date().toDateString()}] ${req.methode}${req.originalURL}`);
next();
}
