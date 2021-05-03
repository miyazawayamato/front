import React, { useState } from "react";

type Props = {
    name:string;
    deledata:() => void
}

const Modal:React.FC<Props> = ({name, deledata}) => {
    
    
    
    return(
        <div>
            <p>{name}</p>
            <button onClick={deledata}>削除します</button>
            <button>×</button>
        </div>
    );
}

export default Modal