import React from "react";
import { Link } from 'react-router-dom';

type Props = {
    image: string;
    title: string;
    link: string;
}

const Box: React.FC<Props> = ({image, title, link}) => {
    
    return(
        <div>
            <Link to={link}>{image}</Link>
            <div>{title}</div>
        </div>
    );
}

export default Box