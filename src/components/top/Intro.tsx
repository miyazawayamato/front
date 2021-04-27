import React from "react";

type Props = {
    title: string;
    text: string;
}

const Intro: React.FC<Props>  = ({title, text}) => {
    
    return(
        <div className="intro">
            <div>
                <h5>{text}</h5>
                <p>{title}</p>
            </div>
            <div>
                <i className="far fa-file-pdf"></i>
            </div>
        </div>
    );
}

export default Intro