import { useState } from "react";

export default useAPi = (apiFunct) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const fetchData = async (...arg) => {
    setLoader(true);
    const response = await apiFunct(...arg);
    setLoader(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };
  return { data, error, loader, fetchData };
};
