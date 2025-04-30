import { useState, FormEvent, ChangeEvent } from 'react';

export function PaymentForm() {
    const [selectedAmount, setSelectedAmount] = useState<string>('100');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isOfferAccepted, setIsOfferAccepted] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const validateAmount = (value: string): boolean => {
        if (!value) return true;
        const num = parseFloat(value);
        if (isNaN(num)) {
            setError('Пожалуйста, введите числовое значение');
            return false;
        }
        if (num <= 0) {
            setError('Сумма должна быть больше 0');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isOfferAccepted) {
            alert('Пожалуйста, примите условия публичной оферты');
            return;
        }

        const amount = customAmount || selectedAmount;
        if (!validateAmount(amount)) return;

        const payload = { value: amount };

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            console.log('Response:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCardClick = (amount: string) => {
        setSelectedAmount(amount);
        setCustomAmount('');
        setError('');
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(value);
        validateAmount(value);
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsOfferAccepted(e.target.checked);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4 mb-4">
                    <div
                        className={`flex-1 p-4 border rounded-lg cursor-pointer text-center ${
                            selectedAmount === '100' && !customAmount
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300'
                        }`}
                        onClick={() => handleCardClick('100')}
                    >
                        100 ₽
                    </div>
                    <div
                        className={`flex-1 p-4 border rounded-lg cursor-pointer text-center ${
                            selectedAmount === '500' && !customAmount
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300'
                        }`}
                        onClick={() => handleCardClick('500')}
                    >
                        500 ₽
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Введите свою сумму"
                        value={customAmount}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded-lg focus:outline-none ${
                            error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                        }`}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>

                <button
                    type="submit"
                    disabled={!isOfferAccepted || !!error}
                    className={`w-full p-2 rounded-lg text-white ${
                        isOfferAccepted && !error
                            ? 'bg-blue-500 hover:bg-blue-600'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                    Помочь
                </button>

                <div className="mt-4 flex items-center">
                    <input
                        type="checkbox"
                        id="offer"
                        checked={isOfferAccepted}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    <label htmlFor="offer" className="text-sm">
                        Я принимаю условия{' '}
                        <a href="/docs/public-offer.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                            публичной оферты
                        </a>
                    </label>
                </div>
            </form>
        </div>
    );
}