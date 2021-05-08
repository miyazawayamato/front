import React, { useState } from "react";

type Props = {
    name:string;
    deledata:() => void
    disp:string
    close:() => void
}

const Modal:React.FC<Props> = ({name, deledata, disp, close}) => {
    
    
    
    return(
        <div className={disp}>
            <p>{name}</p>
            <button onClick={deledata}>削除します</button>
            <button onClick={close}>×</button>
        </div>
    );
}

export default Modal