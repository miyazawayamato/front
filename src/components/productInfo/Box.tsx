


const Box = () => {
    return(
        <div>
            <form action="">
                <input id="name" type="text" value="name" name="name"/>
                <input id="stock" type="number" value="123" name="stock"/>
                <input id="price" type="number" value="456" name="price"/>
                <button>更新</button>
                <button>削除</button>
            </form>
            
        </div>
    );
}

export default Box