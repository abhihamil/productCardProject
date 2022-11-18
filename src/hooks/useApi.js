import { useCallback, useState, useEffect } from "react";
import axios from "axios";

function useApi(url, defaultValue = []) {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);

      setData(res.data);
      setError(null);
      console.log("after call...", data);
    } catch (e) {
      setData(null);
      setError(e);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log("from UseApi ouside fun ..", loading, error, data);

  return {data, loading, error};
}

export default useApi;
