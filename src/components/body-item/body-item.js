import './body-item.css';

const BodyItem = ({ item, handleClick }) => {
    const {id, title, price, img} = item;
    return (
                <div className="card mr-4 mb-4" style={{width: '18rem'}}>
                    <img src={img} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text card-text-price">{price}$</p>
                        <a href="#" className="btn btn-primary" onClick={() => handleClick(item)}>Buy it</a>
                    </div>
                </div>
    )
   
}

export default BodyItem;