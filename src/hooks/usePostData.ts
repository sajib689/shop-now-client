import { useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

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
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message);
      } else {
        setError('Something went wrong');
      }
      console.error("POST error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error, data };
};

export default usePostData;
