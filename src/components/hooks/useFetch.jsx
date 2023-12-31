import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, value) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				let res = await axios.request(url);
				setData(res.data);
			} catch (error) {
				console.log('fetch failed');
			}
		};
		getData();
	}, [value]);

	return data;
};

export default useFetch;
