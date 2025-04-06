import { useState } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5000"; // your backend base URL

const usePostData = <T = any, R = any>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<R | null>(null);

  const postData = async (endpoint: string, payload: T) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post<R>(`${BASE_URL}${endpoint}`, payload);
      setData(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
      console.error("POST error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error, data };
};

export default usePostData;
