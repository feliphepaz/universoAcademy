import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
	let response;
	let resolve;
	try {
	  setError(null);
	  setLoading(true);
	  response = await fetch(url, options);
	  resolve = await response.json();
	  if (!response.ok) throw new Error(resolve.message);
	} catch (err) {
	  resolve = null;
	  setError(err.message);
	} finally {
	  setData(resolve);
	  setLoading(false);
	  return { response, resolve };
	}
  }, []);

  return {
	data,
	loading,
	error,
	request,
  };
};

export default useFetch;
