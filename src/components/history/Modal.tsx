type Props = {
    name:string;
    time:string;
    disp:string
    deledata:() => void
    close:() => void
}

const Modal:React.FC<Props> = ({name, time, deledata, disp, close}) => {
    
    
    
    return(
        <div className={disp}>
            <div className="innner">
                <div className="text-right">
                    <button onClick={close} className="delete-cancell">×</button>
                </div>
                <p className="delete-text">{time}:{name}<br></br>を削除してもよろしいですか？</p>
                <button onClick={deledata} className="delete-button">削除する</button>
            </div>
        </div>
    );
}

export default Modal