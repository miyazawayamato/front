type Props = {
    image: string;
    title: string;
}

const Box: React.FC<Props> = ({image, title}) => {
    
    return(
        <div>
            <div>{image}</div>
            <div>{title}</div>
        </div>
    );
}

export default Box