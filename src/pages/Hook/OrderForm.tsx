import React, { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    notes: string;
}


function OrderForm() {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, phone, address } = formData;
        if (!name || !email || !phone || !address) {
            setError('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        const phoneRegex = /^\d{10}$/;

        if (!phoneRegex.test(phone)) {
            setError("Số điện thoại không đúng định dạng");
            return
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            setError("Email không đúng định dạng");
            return
        }

        //TODO: xử lý việc đặt hàng
        setSuccess(true);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <div>
            {!success ? (
                <form onSubmit={handleSubmit}>
                    {error && <div style={{ color: "red" }}>{error}</div>}
                    <div>
                        <label htmlFor="name">Họ và tên:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Địa chỉ:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="note">Ghi chú:</label>
                        <textarea
                            id="note"
                            name="note"
                            value={formData.notes}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Đặt hàng</button>
                </form>
            ) : (
                <div style={{ color: "green" }}>Đặt hàng thành công!</div>
            )}
        </div>
    )


    }
   


export default OrderForm

