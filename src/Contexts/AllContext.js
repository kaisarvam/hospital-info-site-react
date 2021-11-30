import React from 'react';
import useHospitals from '../Hooks/useHospitals';
import useServices from '../Hooks/useServices';
import useMedicine from '../Hooks/useMedicine';
import { createContext } from 'react';
import useFirebase from '../Hooks/useFireBase';

export const AllDataContext = createContext();

const AllContext = ({children}) => {
    console.log("all context called !!!");
    const Hospitals = useHospitals();
    const Services = useServices();
    const Medicines = useMedicine();
    const FireBase = useFirebase();
    return (
        <AllDataContext.Provider value={[Hospitals,Services,Medicines,FireBase]}>
            {children}
        </AllDataContext.Provider>
    );
};

export default AllContext;