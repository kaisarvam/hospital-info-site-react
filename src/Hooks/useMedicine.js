import { useState,useEffect } from "react";

const useMedicine = () => {
    const [medicines,setMedicines] = useState([]);
    useEffect(()=>{
        fetch('/madicine.json')
        .then((res)=>res.json())
        .then((data)=> setMedicines(data))
    },[])
    return (medicines);
};

export default useMedicine;