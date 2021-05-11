import React from "react";
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    link: string;
}

const Box: React.FC<Props> = ({title, link}) => {
    
    return(
        <div className="menu">
            <Link to={link}>{title}</Link>
        </div>
    );
}

export default Box