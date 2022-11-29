import "../styles/BakeryItem.css";

export default function BakeryItem(props) {
    if (props.item.id in props.cartMap) {
        return (
            <div class="BakeryItem">
                <img src={props.item.image}></img>
                <h2>
                {props.item.name}
                </h2> 
                <p>{props.item.description}</p>
                <p>Type: {props.item.type}</p>
                <p>{props.item.cuisine}</p>
                <p>{props.item.price}</p>
                <div id="button-container">
                    <button onClick={() => {props.setTotalPrice(props.currPrice + props.item.price); props.setCart(props.item.id);}}>Add to Cart</button>
                    <button onClick={() => {props.setTotalPrice(props.currPrice - props.item.price); props.removeFromCart(props.item.id);}}>Remove from Cart</button>
                </div>
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
            <p>Type: {props.item.type}</p>
            <p>{props.item.cuisine}</p>
            <p>{props.item.price}</p>
            <div id="button-container">
                <button onClick={() => {props.setTotalPrice(props.currPrice + props.item.price); props.setCart(props.item.id);}}>Add to Cart</button>
            </div>
        </div>
    );
    }
  }