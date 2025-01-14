import { useEffect, useState } from "react";

export const UseHttp = (fn, param) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
          const data = await fn(param);
          setData(data);
        };
        getData();
    }, [fn, param]);
    return [data, setData];
};


