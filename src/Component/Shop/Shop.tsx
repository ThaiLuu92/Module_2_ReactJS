import React, { useState } from 'react';
import { I_Product } from '../../Types/types'
import "./Shop.css"
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, deleteProduct, updateProduct } from '../../Actions/productActions';
import ProductForm from '../ModalFormProduct/ProductForm';


const Shop: React.FC = () => {
    const products = useSelector((state) => state) as I_Product[];
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState<I_Product>({
        id: Math.random(),
        name: '',
        price: 0,
        quantity: 0,
        description: '',
        imgUrl: 'https://example.com/default.jpg',
    });
    const [isAdding, setIsAdding] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<I_Product | null>(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = () => {
        setIsAdding(true);
    };

    const handleSave = (product: I_Product) => {
        if (isUpdating && selectedProduct) {
            dispatch(updateProduct(selectedProduct));
        } else {
            dispatch(addProduct(product));
        }
        setIsAdding(false);
        setIsUpdating(false);
        setSelectedProduct(null);
        setNewProduct({
            id: Math.floor(Math.random() * 1000),
            name: '',
            price: 0,
            quantity: 0,
            description: '',
            imgUrl: 'https://example.com/default.jpg',
        });
    };

    const onCancel = () => {
        setIsAdding(false);
        setIsUpdating(false);
        setSelectedProduct(null);
    };

    const handleDeleteProduct = (id: number) => {
        dispatch(deleteProduct(id));
    };

    const handleUpdateProduct = (product: I_Product) => {
        setSelectedProduct(product);
        setIsUpdating(true);
        setIsAdding(true);
    };

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <button onClick={handleAddProduct}>Thêm sản phẩm</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                            <td>
                                <div className="btn-group">
                                    <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
                                        Xóa
                                    </button>
                                    <button className="update-button" onClick={() => handleUpdateProduct(product)}>
                                        Cập nhật
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isAdding && (
                <ProductForm
                    onSave={handleSave}
                    onCancel={onCancel}
                    product={isUpdating ? selectedProduct : newProduct}
                    isUpdate={isUpdating}
                    handleInputChange={handleInputChange}
                />
            )}
        </div>
    );
};

export default Shop;

