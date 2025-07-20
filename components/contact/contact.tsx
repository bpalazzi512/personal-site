'use client';
import React, { useState, useEffect, useRef } from 'react';
import { CornerRightUpIcon, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { sendEmail } from '@/lib/actions/gmail';
import { cn } from '@/lib/utils';

export function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    
    // Email validation states
    const [emailValid, setEmailValid] = useState<boolean | null>(null);
    const [emailTouched, setEmailTouched] = useState(false);
    const [isValidatingEmail, setIsValidatingEmail] = useState(false);
    
    // Name validation states
    const [nameValid, setNameValid] = useState<boolean | null>(null);
    const [nameTouched, setNameTouched] = useState(false);
    const [isValidatingName, setIsValidatingName] = useState(false);
    
    // Message validation states
    const [messageValid, setMessageValid] = useState<boolean | null>(null);
    const [messageTouched, setMessageTouched] = useState(false);
    const [isValidatingMessage, setIsValidatingMessage] = useState(false);
    
    const emailDebounceRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const nameDebounceRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const messageDebounceRef = useRef<NodeJS.Timeout | undefined>(undefined);

    // Validation functions
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateName = (name: string): boolean => {
        return name.trim().length >= 2;
    };

    const validateMessage = (message: string): boolean => {
        return message.trim().length >= 10;
    };

    // Check if all fields are valid
    const allFieldsValid = emailValid === true && nameValid === true && messageValid === true;

    // Email validation
    useEffect(() => {
        if (emailDebounceRef.current) {
            clearTimeout(emailDebounceRef.current);
        }

        if (email && emailTouched) {
            setIsValidatingEmail(true);
            emailDebounceRef.current = setTimeout(() => {
                setEmailValid(validateEmail(email));
                setIsValidatingEmail(false);
            }, 1000);
        } else if (!email && emailTouched) {
            // Reset validation when field becomes empty
            setEmailValid(false);
            setIsValidatingEmail(false);
        }

        return () => {
            if (emailDebounceRef.current) {
                clearTimeout(emailDebounceRef.current);
            }
        };
    }, [email, emailTouched]);

    // Name validation
    useEffect(() => {
        if (nameDebounceRef.current) {
            clearTimeout(nameDebounceRef.current);
        }

        if (name && nameTouched) {
            setIsValidatingName(true);
            nameDebounceRef.current = setTimeout(() => {
                setNameValid(validateName(name));
                setIsValidatingName(false);
            }, 1000);
        } else if (!name && nameTouched) {
            // Reset validation when field becomes empty
            setNameValid(false);
            setIsValidatingName(false);
        }

        return () => {
            if (nameDebounceRef.current) {
                clearTimeout(nameDebounceRef.current);
            }
        };
    }, [name, nameTouched]);

    // Message validation
    useEffect(() => {
        if (messageDebounceRef.current) {
            clearTimeout(messageDebounceRef.current);
        }

        if (message && messageTouched) {
            setIsValidatingMessage(true);
            messageDebounceRef.current = setTimeout(() => {
                setMessageValid(validateMessage(message));
                setIsValidatingMessage(false);
            }, 1000);
        } else if (!message && messageTouched) {
            // Reset validation when field becomes empty
            setMessageValid(false);
            setIsValidatingMessage(false);
        }

        return () => {
            if (messageDebounceRef.current) {
                clearTimeout(messageDebounceRef.current);
            }
        };
    }, [message, messageTouched]);

    // Handle email input change
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (!emailTouched) {
            setEmailTouched(true);
        }
        setIsValidatingEmail(true);
    };

    // Handle name input change
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (!nameTouched) {
            setNameTouched(true);
        }
        setIsValidatingName(true);
    };

    // Handle message input change
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        if (!messageTouched) {
            setMessageTouched(true);
        }
        setIsValidatingMessage(true);
    };

    // Handle email blur
    const handleEmailBlur = () => {
        setEmailTouched(true);
        if (email) {
            setIsValidatingEmail(true);
            setEmailValid(validateEmail(email));
            setIsValidatingEmail(false);
        }
    };

    // Handle name blur
    const handleNameBlur = () => {
        setNameTouched(true);
        if (name) {
            setIsValidatingName(true);
            setNameValid(validateName(name));
            setIsValidatingName(false);
        }
    };

    // Handle message blur
    const handleMessageBlur = () => {
        setMessageTouched(true);
        if (message) {
            setIsValidatingMessage(true);
            setMessageValid(validateMessage(message));
            setIsValidatingMessage(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        
        // Validate all fields on submit
        const isEmailValid = validateEmail(email);
        const isNameValid = validateName(name);
        const isMessageValid = validateMessage(message);
        
        setEmailValid(isEmailValid);
        setNameValid(isNameValid);
        setMessageValid(isMessageValid);
        setEmailTouched(true);
        setNameTouched(true);
        setMessageTouched(true);

        if (!isEmailValid || !isNameValid || !isMessageValid) {
            setError('Please fill in all fields correctly.');
            return;
        }

        setLoading(true);
        try {
            const subject = `Contact from ${name}`;
            const htmlBody = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`;
            console.log(email, subject, htmlBody);
            await sendEmail(email, subject, htmlBody);
            setSuccess(true);
            setEmail('');
            setName('');
            setMessage('');
            setEmailValid(null);
            setNameValid(null);
            setMessageValid(null);
            setEmailTouched(false);
            setNameTouched(false);
            setMessageTouched(false);
            setIsValidatingEmail(false);
            setIsValidatingName(false);
            setIsValidatingMessage(false);
        } catch {
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact" className='min-h-screen w-11/12 lg:w-4xl mt-20  scroll-mt-20 flex flex-col items-center'>
            <div className="w-full text-left mb-10">
                <h1 className="font-extrabold text-3xl underline underline-offset-8 decorationblue-500">CONTACT</h1>
            </div>
            <p className='text-gray-400 text-lg mb-5 w-10/12'>
                You can contact me using the following information: 
            </p>
            <div className='flex flex-col items-center space-y-3 w-full'>
                <p className='text-gray-600 text-lg'>
                    Personal Email: <a href='mailto:bobbypalazzi@gmail.com' className='font-bold'>bobbypalazzi@gmail.com</a>
                </p>
                <p className='text-gray-600 text-lg'>
                    School Email: <a href='mailto:palazzi.r@northeastern.edu' className='font-bold'>palazzi.r@northeastern.edu</a>
                </p>
                <p className='text-gray-600 text-lg'>
                    Phone: <span className='font-bold'>201-259-4652</span>
                </p>
            </div>
            <p className='text-gray-400 text-lg mt-5 mb-5 w-10/12'>
                Or, you can fill out the form below:
            </p>
            
            <form className='flex flex-col items-center space-y-3 w-full' onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="relative w-10/12">
                    <input
                        type="email"
                        placeholder='Email'
                        className={cn(
                            "border-2 border-slate-400 rounded-sm p-2 w-full text-md transition-colors duration-200 pr-10",
                        )}
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {isValidatingEmail && email && (
                            <Loader2 className="h-5 animate-spin text-slate-400" />
                        )}
                        {!isValidatingEmail && emailTouched && emailValid === true && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {!isValidatingEmail && emailTouched && emailValid === false && (
                            <XCircle className="h-5 w-5 text-red-500" />
                        )}
                    </div>
                </div>

                {/* Name Input */}
                <div className="relative w-10/12 ">
                    <input
                        type="text"
                        placeholder='Name'
                        className={cn(
                            "border-2 border-slate-400 rounded-sm p-2 w-full text-md transition-colors duration-200 pr-10",
                        )}
                        value={name}
                        onChange={handleNameChange}
                        onBlur={handleNameBlur}
                        required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {isValidatingName && name && (
                            <Loader2 className="h-5 animate-spin text-slate-400" />
                        )}
                        {!isValidatingName && nameTouched && nameValid === true && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {!isValidatingName && nameTouched && nameValid === false && (
                            <XCircle className="h-5 w-5 text-red-500" />
                        )}
                    </div>
                </div>

                {/* Message Input */}
                <div className="relative w-10/12">
                    <textarea
                        className='border-2 border-slate-400 rounded-sm p-2 w-full h-52 resize-none text-md transition-colors duration-200 pr-10'
                        placeholder='Message'
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={handleMessageBlur}
                        required
                    />
                    <div className="absolute right-3 top-3">
                        {isValidatingMessage && message && (
                            <Loader2 className="h-5 animate-spin text-slate-400" />
                        )}
                        {!isValidatingMessage && messageTouched && messageValid === true && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {!isValidatingMessage && messageTouched && messageValid === false && (
                            <XCircle className="h-5 w-5 text-red-500" />
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className={cn(
                        "w-11/12 max-w-96 p-3 bg-gray-800 rounded-sm flex items-center justify-between cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                        allFieldsValid ? "bg-gray-800 hover:scale-105" : "bg-gray-600"
                    )}
                    disabled={loading || !allFieldsValid}
                >
                    <h1 className='text-lg text-gray-300'>
                        {loading ? 'Sending...' : 'Send'}
                    </h1>
                    <CornerRightUpIcon className='text-lg text-gray-300' />
                </button>
                {error && <div className='text-red-500 text-sm'>{error}</div>}
                {success && <div className='text-green-600 text-sm'>Message sent successfully!</div>}
            </form>
        </div>
    );
}

