
import { useEffect,useState } from 'react';

const useHospitals = () => {
    const [hospitals,setHospitals] = useState([]);
    useEffect(()=>{
        fetch('/hospitals.json')
        .then((res)=>res.json())
        .then((data)=>setHospitals(data))
    },[])
    return (hospitals);
};

export default useHospitals;