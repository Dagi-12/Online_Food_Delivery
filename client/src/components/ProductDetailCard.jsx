import Button from "./elements/Button";
const ProductDetailCard = ({ product,onAddProduct }) => {
    return (
        
        <div className=" w-full p-4 m-4 rounded-lg bg-slate-50  ">
            <div className="flex flex-col items-center justify-between w-300">
                <h2 className="text-2xl">{product.name}</h2>
                <p className="text-xl text-gray-500">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                <div className="text-2xl text-black">{product.price}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            </div>
             <div className="w-full flex items-center justify-center">
                {/* <Button onClick={onAddProduct} >Add to Cart</Button> */}
                <Button onClick={onAddProduct}>Add to Cart</Button>

            </div>
        </div>
    )
}

export default ProductDetailCard;