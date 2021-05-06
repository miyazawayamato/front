import { useHistory } from 'react-router-dom';


const SelectCusto = () => {
    
    const history = useHistory();
    const handleLink = (path: string) : void => history.push(path);
    
    return(
        <div>
            <p>納品先を選択する</p>
            <button onClick={() => handleLink('/derivery?id=1&customer=企業１')}>納品先1</button>
            <button onClick={() => handleLink('/derivery?id=2&customer=企業２')}>納品先2</button>
            <button onClick={() => handleLink('/derivery?id=3&customer=企業３')}>納品先3</button>
            <button onClick={() => handleLink('/derivery?id=4&customer=企業４')}>納品先4</button>
        </div>
    );
}

export default SelectCusto