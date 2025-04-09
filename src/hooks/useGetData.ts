import { useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGetData = <T = any, R = any>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<R | null>(null);

  const getData = async (endpoint: string, params?: T) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<R>(`${BASE_URL}${endpoint}`, {
        params,
      });
      setData(response.data);
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message);
      } else {
        setError('Something went wrong');
      }
      console.error("GET error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { getData, loading, error, data };
};

export default useGetData;
