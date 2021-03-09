import { validator, checkBody, checkEmail, checkMongoId } from "../../_middlewares";
import path from "path";
import multer from "multer";


const storage = (dirName = "/../../../uploads/images") => multer.diskStorage({
    destination: function (req, file, cb) {    
      if (file.mimetype.split('video').length > 1) {
        cb(null, path.join(__dirname, "/../../../uploads/videos"));
      } else if (file.mimetype.split('image').length > 1) {
        cb(null, path.join(__dirname, dirName));
      } else {
        cb(null, path.join(__dirname, "/../../../uploads/documents"));
      }
    },
    filename: function (req, file, cb) {
      const fileExt = file.originalname.split(".")[
        file.originalname.split(".").length - 1
      ];
      const filename = 'upload' // file.originalname.replace(fileExt, "").replace(/\s+/g, "");
      cb(
        null,
        (filename + '_' + (new Date().getTime()) + "." + fileExt)
      );
    },
  });
  
  
  export const uploadFile = multer({ storage: storage() });

  export const create = [checkBody("title"), checkBody("price"), validator];

  export const update = [checkBody("title"), checkBody("price"), checkMongoId("_id"), validator];
