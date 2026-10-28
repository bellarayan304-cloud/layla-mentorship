// export const authorize=(...roles) => {
 
// return (req, res, next) => {
//     if(!roles.includes(req.user.role)){
//         return res.status(401).json({message:`acces denad: requaredon of [${roles.join(',')}]`})
//     }
//     next()

// }

// }


export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Access denied: required one of [${roles.join(', ')}]`
      });
    }
console.log("USER ROLE:", req.user.role);
    next(); // HALKAN KU DAR
  };
};