import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {

    const [data, setData ] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // const options = {
    //     method: 'GET',
    //     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    //     params: { ...query },
    //     headers: {
    //       'X-RapidAPI-Key': '5078e9dafdmsh416b363cac5c355p1a47fbjsn982a0f22456a',
    //       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     }
    //   };
    
    const options = {
        method: 'GET',
        url: `http://10.0.2.2:3000/api/jobs`
    }

    const fetchData = async () =>{
        setIsLoading(true)
        try {
            const res = await axios.request(options);
            setData(res.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            console.log("There is an Error", error)
        } finally{
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        fetchData()
    },[])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

  return { data, isLoading, error, refetch }
}

export default useFetch;