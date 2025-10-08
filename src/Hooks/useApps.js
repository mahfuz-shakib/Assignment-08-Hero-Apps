import axios from 'axios'
import { useEffect, useState } from 'react';

const useApps = () => {
    const [apps, setApps]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError] = useState(null)
    useEffect(()=>{
        setLoading(true);
        axios('/appsData.json')
        .then(data => setApps(data.data))
        .catch(error=>setError(error))
        .finally(()=>setTimeout(()=>setLoading(false),1000));
    },[])
    return {apps, loading, error,setLoading}
};

export default useApps;