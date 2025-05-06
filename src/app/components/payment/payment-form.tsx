import {useState, FormEvent, ChangeEvent} from 'react';
import {handleResponseStatus} from "@/app/utils/response-status-hadnler";

export function PaymentForm() {
    const [selectedAmount, setSelectedAmount] = useState<string>('');
    const [isOfferAccepted, setIsOfferAccepted] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [httpError, setHttpError] = useState<string>('');

    const validateAmount = (value: string): boolean => {
        if (!value) return false;
        const num = parseFloat(value);
        if (isNaN(num)) {
            setError('Пожалуйста, введите числовое значение');
            return false;
        }
        if (num < 10) {
            setError('Минимальная сумма - 10 рублей');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isOfferAccepted) {
            alert('Пожалуйста, примите условия публичной оферты и политики персональных данных');
            return;
        }

        const amount = selectedAmount;
        if (!validateAmount(amount)) return;

        const payload = { value: amount };
        try {
            const response = await fetch('/api/payment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const message = handleResponseStatus(response);
            if (message) {
                showHttpError(message);
                return;
            }

            const data = await response.json();
            window.location.replace(data.confirmationUrl);
        } catch {
            setError('Непредвиденная ошибка');
        }
    };

    const showHttpError = (message: string) => {
        setHttpError(message)
        setTimeout(() => {setHttpError('')}, 5000)
    }

    const handleCardClick = (amount: string) => {
        setSelectedAmount(amount);
        setError('');
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setSelectedAmount(value);
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
                            selectedAmount === '300'
                                ? 'border-lime-700 bg-lime-50'
                                : 'border-gray-400 bg-gray-200'
                        }
                        transition-all duration-300 ease-in-out
                        `}
                        onClick={() => handleCardClick('300')}
                    >
                        300 ₽
                    </div>
                    <div
                        className={`flex-1 p-4 border rounded-lg cursor-pointer text-center ${
                            selectedAmount === '500'
                                ? 'border-lime-700 bg-lime-50'
                                : 'border-gray-400 bg-gray-200'
                        }
                        transform transition-all duration-300 ease-in-out
                        `}
                        onClick={() => handleCardClick('500')}
                    >
                        500 ₽
                    </div>
                </div>

                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Введите свою сумму"
                        value={selectedAmount}
                        onChange={handleInputChange}
                        className={`w-full p-2 border-b bg-transparent focus:outline-none ${
                            error ? 'border-b-500' : 'border-b-zinc-950 placeholder:text-zinc-950'
                        }`}
                        required
                    />
                    <p className="text-red-500 text-sm mt-1">
                        <span>{error}</span>
                        <span>{httpError}</span>
                        &nbsp;
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={!isOfferAccepted || !!error}
                    className={`w-full p-2 rounded-lg text-white ${
                        isOfferAccepted && !error
                            ? 'bg-lime-600 hover:bg-lime-700'
                            : 'bg-gray-400 cursor-not-allowed'
                    }
                    transition-all duration-300 ease-in-out
                    `}
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
                    <label htmlFor="offer" className="text-sm text-pretty">
                        Я принимаю условия&nbsp;
                        <a href="/docs/public-offer.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                            публичной оферты
                        </a>
                        &nbsp;и&nbsp;
                        <a href="" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                            политики персональных данных
                        </a>
                    </label>
                </div>
            </form>
        </div>
    );
}