import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadOnCloudinary = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  try {
    if (!filePath) {
      return null;
    }

    const uploadResult = await cloudinary.uploader.upload(filePath);

    // ✅ File exists check before delete
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return uploadResult.secure_url;

  } catch (error) {
    console.error("Cloudinary Upload Error:", error);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return null; // Return null if error happens
  }
};

export default uploadOnCloudinary;
