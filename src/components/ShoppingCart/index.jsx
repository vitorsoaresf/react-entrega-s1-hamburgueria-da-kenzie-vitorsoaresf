import ProductCart from "../ProductCart";
import "./styles.css";

function ShoppingCart({ currentSale, removeProduct, setCurrentSale }) {
  const initial = currentSale
    .reduce((acc, element) => (acc += element.price), 0)
    .toFixed(2);

  return (
    <div className="shoppingCart">
      <header className="shoppingCart__title">
        <p>Carrinho de compras</p>
      </header>
      {currentSale.length ? (
        <ul className="list-cart">
          {currentSale.map((product, index) => (
            <li id={index} key={index}>
              <ProductCart removeProduct={removeProduct} product={product} />
            </li>
          ))}
          {
            <div className="shoppingCart__amount">
              <div className="shoppingCart__amount_description">
                <p>Total</p>
                <p className="value">{initial}</p>
              </div>
              <button onClick={() => setCurrentSale([])}>Remover todos</button>
            </div>
          }
        </ul>
      ) : (
        <div className="list-clear">
          <h3>Sua sacola está vazia!</h3>
          <p>Adicione itens</p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
