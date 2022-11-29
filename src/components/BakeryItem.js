export default function BakeryItem(props) {
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