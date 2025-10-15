import { useState, useEffect } from 'react'; 
import { useSelector } from 'react-redux';

export const useAth = () => {
    const { user } = useSelector((state) => state.auth);

    
    const auth = !!user; 
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setLoading(false); 
    }, [user]); 
    
    return { auth, loading };
};