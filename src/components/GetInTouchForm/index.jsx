import { useState } from "react";

function GetInTouchForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Validate email
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Display the alert with user inputs
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }

    return (
        <div className="mr-4 w-[450px] ml-0">
            <form>
                <div className="flex gap-7 mb-3 w-[100%]">
                    <input
                        type="text"
                        className="outline-none border-none w-[50%] p-1 text-sm placeholder:p-0 text-black pl-2"
                        placeholder="Name"
                        onChange={handleNameChange}
                        value={name}
                    />
                    <input
                        type="email"
                        className="outline-none border-none w-[50%] p-1 text-sm placeholder:p-0 text-black pl-2"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>

                <textarea
                    className="w-[100%] outline-none border-none h-16 text-black pl-3 pt-2 text-[10px]"
                    placeholder="Message"
                    onChange={handleMessageChange}
                    value={message}
                ></textarea>
                
                <button
                    type="button"
                    className="w-32 text-xs h-10 mt-12 bg-transparent hover:bg-white text-white font-semibold py-2 px-4 border-2 border-white rounded-full transition-all duration-700 hover:text-black ease-in-out shadow-md hover:shadow-lg"
                    onClick={handleSubmit}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default GetInTouchForm;