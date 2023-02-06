import FormatMoney from "../../utils/FormatMoney";
import { HeartIcon, PlusIcon } from "../Icons/Icons";

const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="product__action">
                <HeartIcon size={24} />
            </div>

            <img src={product.preview} alt={product.name} />

            <h3>{product.name}</h3>

            <div className="product__footer">
                <div className="price">
                    <span className="gray">Цена:</span>
                    <span className="value">{FormatMoney(product.price)}</span>
                </div>

                <button>
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
}

export default Product;