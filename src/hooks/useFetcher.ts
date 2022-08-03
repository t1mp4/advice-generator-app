import { useState, useEffect } from 'react';

export const useFetcher = <DataType>(url: string) => {
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (): Promise<DataType> => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return await res.json();
  };

  useEffect(() => {
    fetchData()
      .then(newData => setData(newData))
      .catch(error => setError('An error occured while fetching the data'));
  }, [fetchData]);

  return { data, setData, error, setError, fetchData };
};
