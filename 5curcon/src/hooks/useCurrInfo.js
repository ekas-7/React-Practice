import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/f594affd685b62973886698f/latest/${baseCurrency}`);
        const result = await response.json();
        if (result.result === "success") {
          setData(result.conversion_rates);
        } else {
          throw new Error(result["error-type"]);
        }
      } catch (error) {
        setError("Error fetching the currency data");
        console.error("Error fetching the currency data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseCurrency]);

  return { data, error, loading };
}

export default useCurrencyInfo;
