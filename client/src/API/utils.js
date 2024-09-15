import axios from "axios";

export const imageUploadimgbb= async image=>{

const formData= new FormData();
  formData.append('image', image);

  const {data} =await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.
    VITE_Imgbb_API_KEY}`,formData)
    
    // console.log(data);
    return data;


}