import React, { useState } from 'react'
import Title from '../home/Title'
import { FiSend } from "react-icons/fi";
import axios from "axios";
import animation from "../../assets/test.json"
import Lottie from 'lottie-react';
const Contact = () => {

    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [messages, setMessages] = useState("");

    const [errClientName, setErrClientName] = useState(false);
    const [errEmail, setErrEmail] = useState(false);
    const [errMessages, setErrMessage] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail(false);
    };

    const handleMessages = (e) => {
        setMessages(e.target.value);
        setErrMessage(false);
    };
    const emailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };


    const handleSend = (e) => {
        e.preventDefault();

        if (!clientName) {
            setErrClientName(true);
        }

        if (!email) {
            setErrEmail(true);

        } else {

            if (!emailValidation(email)) {
                setErrEmail(true);
            }
        }

        if (!messages) {
            setErrMessage(true);
        }
        if (!clientName) {
            setErrClientName(true);
        }

        if (clientName && email && emailValidation(email) && messages) {
            axios.post("https://getform.io/f/05d00c62-69a3-459d-86eb-6d8343518389", {
                name: clientName,
                email: email,
                message: messages
            })
            setSuccessMsg(`Hello ${clientName}, Your message has been sent successfully.`)
            setClientName("");
            setEmail("");
            setMessages("");
        }


    }

    return (
        <div className="w-full">
            <Title title="Get" subTitle="in Touch" />
            <div className="w-full flex justify-center">
                <Lottie style={{ height: 400 }} loop={false} animationData={animation} speed={0.2} />
            </div>
            <div className="w-full">
                {successMsg ? (
                    <p className="text-center text-base font-titleFont p-20 text-designColor">
                        {successMsg}
                    </p>
                ) : (
                    <form
                        id="form"
                        action="https://getform.io/f/e18ee560-5133-4cfe-9a48-eddb6f012a9f"
                        method="POST"
                        className="p-2 flex flex-col gap-5"
                    >
                        <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
                            <input
                                onChange={handleName}
                                value={clientName}
                                className={`${errClientName
                                    ? "border-red-600 focus-visible:border-red-600"
                                    : "border-zinc-600 focus-visible:border-designColor"
                                    } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                                type="text"
                                placeholder="Full Name"
                            />
                            <input
                                onChange={handleEmail}
                                value={email}
                                className={`${errEmail
                                    ? "border-red-600 focus-visible:border-red-600"
                                    : "border-zinc-600 focus-visible:border-designColor"
                                    } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                                type="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <textarea
                            onChange={handleMessages}
                            value={messages}
                            className={`${errMessages
                                ? "border-red-600 focus-visible:border-red-600"
                                : "border-zinc-600 focus-visible:border-designColor"
                                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
                            placeholder="Your Message"
                            rows="4"
                        ></textarea>
                        <div className="w-full flex justify-end">
                            <button
                                onClick={handleSend}
                                className="text-base w-44 flex justify-end gap-1 text-gray-200 hover:text-designColor duration-200"
                            >
                                Send Message{" "}
                                <span className="mt-1 text-designColor">
                                    <FiSend />
                                </span>
                            </button></div>

                    </form>
                )}
            </div>
        </div>
    )
}

export default Contact

