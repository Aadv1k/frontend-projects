import { useState, useEffect } from "react";

function isEmailValid(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isPhoneValid(phone) {
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}

function isNameValid(name) {
  const namePattern = /^[A-Za-z\s]+$/;
  return namePattern.test(name);
}

export default function PersonalInfo({ disabled, setDisabled, processInfo, setProcessInfo}) {
    const [email, setEmail] = useState<string>(processInfo.email ?? "");
    const [phoneNumber, setPhoneNumber] = useState<string>(processInfo.phoneNumber ?? "");
    const [name, setName] = useState<string>(processInfo.name ?? "");

    const [isBadEmail,setBadEmail] = useState(false);

    useEffect(() => {
        const validity = [isEmailValid(email), isPhoneValid(phoneNumber), isNameValid(name)];

        if (!validity.every(e => e)) {
            if (!validity[0]) { setBadEmail(true); } else { setBadEmail(false) }
            setDisabled(true)
            return;
        };

        setProcessInfo({
            ...processInfo,
            email: email,
            name: name,
            phoneNumber: phoneNumber
        })

        setDisabled(false);

    }, [email, phoneNumber, name]) 


    return (
        <>
            <div>
                <h1 className="text-2xl heading mb-2 md:text-3xl">personal info</h1>
                <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
            </div>

            <form action="" className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <label for="name" className="text-marine-blue">Name</label>
                    <input defaultValue={processInfo.name ?? ""} name="name" type="text" placeholder="e.g. Stephen King" className="input" onInput={(e) => setName(e.target.value) } />
                </div>

                <div className="flex flex-col gap-3">
                    <label for="email" className="text-marine-blue">Email Address</label>
                    <input defaultValue={processInfo.email ?? ""} name="email" type="email" placeholder="e.g. stephenking@lorem.com" className={`input ${isBadEmail ? "input--bad" : ""}`} onInput={(e) => setEmail(e.target.value) }/>
                </div>

                <div className="flex flex-col gap-3">
                    <label for="phoneNumber" className="text-marine-blue">Phone Number</label>
                    <input defaultValue={processInfo.phoneNumber ?? ""} name="phoneNumber" type="tel" placeholder="e.g. +1 234 567 890" className="input" onInput={(e) => setPhoneNumber(e.target.value) }/>
                </div>
            </form>
        </>
    )
}
