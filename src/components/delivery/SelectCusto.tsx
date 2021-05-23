import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect} from "react";
import axios from 'axios';
import {host} from "../../Host"


const SelectCusto = () => {
    
    const [buttons, setButtons] = useState();
    
    const history = useHistory();
    const handleLink = (path: string) : void => history.push(path);
    useEffect(()=> {
        const fetchall = async () => {
            
            const res = await axios.get(host + "api/customers");
            // setProducts(res.data);
            const customersData = res.data
            
            const Button = customersData.map((customer : any) => {
                
                return(
                    <button 
                    className="selcus-button"
                    key={customer.id} 
                    onClick={() => handleLink("/select/products?id="+ customer.id + "&customer=" + encodeURI(customer.name))}
                    >{customer.name}
                    </button>
                );
                
            })
            setButtons(Button)
            
        }
        fetchall();
        
    },[])
    
    return(
        <div>
            <h4>納品</h4>
            <p>納品先を選択する</p>
            <div className="buttons">
                {buttons}
            </div>
            <Link to="/mainmenu" className="top-to-link">top</Link>
        </div>
    );
}

export default SelectCusto