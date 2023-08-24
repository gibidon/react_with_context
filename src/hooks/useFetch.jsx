import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.text())
      .then((text) => setData(text))
      .catch((e) => setError(e))
      .finally(() => setDone(true));
  }, []);

  return { done, data, error };
}
