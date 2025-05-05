import {useState, FormEvent, ChangeEvent, useEffect} from 'react';
import {X} from "lucide-react";
import Image from 'next/image';
import {FixModalOpen} from "@/app/utils/modal-helper";

export default function PaymentWidget() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        FixModalOpen(isOpen);
        if (isOpen)
            window.history.pushState({ modalOpen: true }, '');

        const handlePopState = () => {
            if (isOpen)
                setIsOpen(false);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            FixModalOpen(false);
            window.removeEventListener('popstate', handlePopState);
        };
    }, [isOpen]);

    const openModal = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    }

    const closeModal = () => {
        if (isOpen) {
            setIsOpen(false);
            if (window.history.state?.modalOpen) {
                window.history.back();
            }
        }
    }

    return(
        <div className="flex flex-row justify-end md:justify-center items-center">
            <button className={`p-1 px-2 rounded-sm bg-lime-700 text-zinc-50
                    md:text-zinc-950 md:bg-transparent md:px-3 md:rounded-md md:hover:text-zinc-50 md:hover:bg-lime-700
                    active:scale-105
                    transition-all duration-300 ease-in-out`}
                    onClick={openModal}
            >
                Помочь
            </button>
            <div className={`fixed z-20 flex justify-center left-0 top-0 w-full h-dvh bg-zinc-800/50 
                    ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"} transform transition-opacity duration-300 ease-in-out`}>

                <div className={`flex flex-row flex-wrap justify-center gap-4 p-4 mx-4 bg-zinc-50 rounded-lg z-30 mt-[10vh]
                        ${isOpen ? "" : "-translate-y-[50vh]"} transform transition-transform duration-300 ease-in-out
                        max-h-[70vh] md:max-h-[400px] overflow-y-auto
                        `}>

                    {/*From*/}
                    <div className={`flex flex-col gap-4 p-2 rounded-lg w-[350px]
                                    bg-gradient-to-br from-green-100 to-amber-100`}
                    >
                        <nav className={"flex flex-row gap-2 justify-end items-baseline"}>
                            <h4 className={"md:text-lg"}>Благотворительное пожертвование</h4>
                            <X size={24} color="black" className="cursor-pointer" onClick={closeModal} />
                        </nav>
                        <div className={"my-auto"}>
                            <PaymentForm/>
                        </div>
                    </div>
                    {/*QR*/}
                    <section className={`flex flex-col items-center gap-4 p-2 rounded-lg w-[350px]
                            bg-gradient-to-tr md:bg-gradient-to-bl from-green-100 to-amber-100
                            `}
                    >
                        <h4 className={"md:text-lg text-center text-pretty"}>
                            Или отсканируйте из приложения банка
                        </h4>
                        <div className={"flex justify-center items-center my-auto"}>
                            <Image
                                src={"/payment-qr.jpg"}
                                alt={"payment-qr"}
                                width={225}
                                height={225}
                                className={"rounded-md"}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function PaymentForm() {
    const [selectedAmount, setSelectedAmount] = useState<string>('');
    const [isOfferAccepted, setIsOfferAccepted] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

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
            const response = await fetch('http://localhost:5065/api/payment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
                .then(res => res.json());

            window.location.replace(response.confirmationUrl);
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                    <p className="text-red-500 text-sm mt-1">{error}&nbsp;</p>
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