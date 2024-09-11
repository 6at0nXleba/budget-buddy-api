import axios from 'axios';
import { Response } from 'express';

export const errorCatcher = (error:any, res:Response, message:string)=>{
  if (axios.isAxiosError(error) && error.response) {
    return res.status(error.response.status).json({ message: error.response.data.message });
  }
  return res.status(500).json({ message, error });
};
