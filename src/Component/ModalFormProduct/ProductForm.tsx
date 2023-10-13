import React, { useState, useEffect } from 'react';
import { I_Product } from '../../Types/types';

interface ProductFormProps {
    onSave: (product: I_Product) => void;
    onCancel: () => void;
    product: I_Product | null;
    isUpdate: boolean;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
    onSave,
    onCancel,
    product,
    isUpdate,
    handleInputChange,
}) => {
    const [editedProduct, setEditedProduct] = useState<I_Product>({
        id: Math.floor(Math.random() * 1000),
        name: '',
        price: 0,
        quantity: 0,
        description: '',
        imgUrl: 'https://example.com/default.jpg',
    });

    // Sử dụng useEffect để cập nhật trạng thái khi product thay đổi
    useEffect(() => {
        if (product) {
            setEditedProduct(product);
        }
    }, [product]);

    const handleSave = () => {
        onSave(editedProduct);
    };

    return (
        <div className="product-modal">
            <div className="modal-content">
                <h2>{isUpdate ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Tên sản phẩm"
                    value={editedProduct.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Mô tả sản phẩm"
                    value={editedProduct.description}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Giá sản phẩm"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                />
                <button onClick={handleSave}>{isUpdate ? 'Cập nhật' : 'Thêm'}</button>
                <button onClick={onCancel}>Đóng</button>
            </div>
        </div>
    );
};

export default ProductForm;