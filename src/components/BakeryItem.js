import "../styles/BakeryItem.css";

export default function BakeryItem(props) {
    if (props.index in props.cartMap) {
        return (
            <div class="BakeryItem">
                <img src={props.item.image}></img>
                <h2>
                {props.item.name}
                </h2> <br></br>
                <p>{props.item.description}</p>
                <p>{props.item.price}</p>
                <button onClick={() => {props.setTotalPrice(props.currPrice + props.item.price); props.setCart(props.index);}}>Add to Cart</button>
                <button onClick={() => {props.setTotalPrice(props.currPrice - props.item.price); props.removeFromCart(props.index);}}>Remove from Cart</button>
            </div>
        );
    } else {
    return (
        <div class="BakeryItem">
            <img src={props.item.image}></img>
            <h2>
            {props.item.name}
            </h2> <br></br>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <button onClick={() => {props.setTotalPrice(props.currPrice + props.item.price); props.setCart(props.index);}}>Add to Cart</button>
        </div>
    );
    }
  }