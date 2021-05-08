import React, { useState, useEffect} from "react";
import ApiGet from "../../functions/ApiGet";
import axios from 'axios';

const Customer = () => {
    
    const [prod, setProd] = useState();
    
    useEffect(()=> {
        const fetchall = async () => {
            
        }
        fetchall();
        
    },[])
    
    return (
        <div>
            <p>納品先</p>
        </div>
    );
}

export default Customer