import { useContext } from 'react';
import { AllDataContext } from '../Contexts/AllContext';

const useAllContext = () => {
    
    const AllData = useContext(AllDataContext);
    
    return (AllData);
};

export default useAllContext;