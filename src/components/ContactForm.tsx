import React, { Component, ChangeEvent, FormEvent } from 'react'

interface ContactFormState {
    name: string;
    email: string;
    message: string;
    error: string | null;
    success: boolean;
}

export class ContactForm extends Component<{}, ContactFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            error: null,
            success: false
        }
    } 
    handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as Pick<ContactFormState, keyof ContactFormState>);
    };

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, email, message } = this.state;
        if (!name || !email || !message) {
            this.setState({ error: 'Họ tên, email và nội dung tin nhắn không được bỏ trống' });
            return;
        }

        // TODO: handle form submission
        this.setState({ success: true });
    };
    render() {
        const { name, email, message, error, success } = this.state;

        return (
            <div>
                {!success ? (
                    <form onSubmit={this.handleSubmit}>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <div>
                            <label htmlFor="name">Họ tên:</label>
                            <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Nội dung tin nhắn:</label>
                            <textarea id="message" name="message" value={message} onChange={this.handleChange} />
                        </div>
                        <button type="submit">Gửi tin nhắn</button>
                    </form>
                ) : (
                    <div style={{ color: 'green' }}>Tin nhắn đã được gửi thành công!</div>
                )}
            </div>
        );
    }
}

export default ContactForm
