import "./styles.css";

function Product({ product, handleClick, products, currentSale }) {
  const addProduct = (productId) => {
    const newElement = products.find((element) => element.id === productId);
    const elementThere = currentSale.find(
      (element) => element.id === newElement.id
    );

    if (!elementThere) {
      handleClick(newElement);
    }
  };

  return (
    <div className="container">
      <div className={product.name}></div>
      <div className="description">
        <h3 className="description-name">{product.name}</h3>
        <h4 className="description-category">{product.category}</h4>
        <h3 className="description-price">R$ {product.price}</h3>
        <button
          onClick={() => addProduct(product.id)}
          className="description-bt"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Product;
