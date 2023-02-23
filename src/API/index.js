import axios from "axios";

export const getCourse = async () => {
  try {
    const response = await axios.get("https://befuprojectteammanagementdemo.azurewebsites.net/api/Course");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const getTeacher = async () => {
  try {
    const response = await axios.get("https://befuprojectteammanagementdemo.azurewebsites.net/api/Teacher");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const getSemester = async () => {
  try {
    const response = await axios.get("https://befuprojectteammanagementdemo.azurewebsites.net/api/Semester");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

