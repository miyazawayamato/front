import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Box from './Box';
import axios from 'axios';
import {host} from "../../Host"



const Menu = () => {
    
    useEffect(()=> {
        
        const herokuStartUp = async () => {
            
            const res = await axios.get(host + "api/derivery/histories");
            console.log("OK")
        }
        
        herokuStartUp();
        
    },[])
    
    return(
        <div>
            <h4 className="menu-title">メニュー</h4>
            {/* <Link to="/">top</Link> */}
            <div className="menus">
                <Box 
                    title="納品"
                    link="/select/customer"
                />
                <Box 
                    
                    title="納品履歴"
                    link="/history"
                />
                <Box 
                    
                    title="在庫管理"
                    link="/products"
                />
                <Box 
                    
                    title="納品先"
                    link="/customers"
                />
                <Box 
                    
                    title="ユーザー管理"
                    link="/users"
                />
                {/* <Box 
                    
                    title="商品情報"
                    link=""
                /> */}
            </div>
        </div>
    );
}

export default Menu