import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
                const result = await response.json();
                setData(result[currency]);
            } catch (error) {
                console.error("Error fetching the currency data", error);
            }
        }

        fetchData();
    }, [currency])

    return data
}

export default useCurrencyInfo;
