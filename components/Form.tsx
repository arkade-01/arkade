import { useState } from "react";
import Button from "./Button";

interface FormProps {
  initialName?: string;
  initialEmail?: string;
  initialSubject?: string;
  initialMessage?: string;
}

function Form({
  initialName = "",
  initialEmail = "",
  initialSubject = "",
  initialMessage = "",
}: FormProps) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState(initialMessage);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validate email format
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let formErrors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = "Name is required.";
      isValid = false;
    }

    if (!email.trim()) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(email)) {
      formErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (!subject.trim()) {
      formErrors.subject = "Subject is required.";
      isValid = false;
    }

    if (!message.trim()) {
      formErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validateForm()) {
      console.log(
        JSON.stringify({
          name,
          email,
          subject,
          message,
        })
      );

      // Clear the form after submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({ name: "", email: "", subject: "", message: "" });
    }
  }

  return (
    <div className="max-w-full mb-12">
      <form action="" className="mt-10" onSubmit={onSubmit}>
        <div className="flex gap-5">
          <div className="w-full">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#2D2D2D] w-full rounded-lg placeholder:text-[#FFFFFF66] placeholder:pl-3 px-4 py-3 text-white xs:text-xs xr:text-sm sm:text-base"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#2D2D2D] w-full rounded-lg placeholder:text-[#FFFFFF66] placeholder:pl-3 px-4 py-3 text-white xs:text-xs xr:text-sm sm:text-base"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mt-5 mb-2">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-[#2D2D2D] mb-5 w-full rounded-lg placeholder:text-[#FFFFFF66] placeholder:pl-3 px-4 py-3 text-white xs:text-xs xr:text-sm sm:text-base"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
          )}
          <textarea
            rows={10}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#2D2D2D] w-full rounded-lg placeholder:text-[#FFFFFF66] placeholder:pl-3 xs:placeholder:text-[13px] placeholder:xr:text-[15px] px-4 py-3 text-white xs:text-xs xr:text-sm sm:text-base active:border-none active:border-transparent resize-none overflow-hidden"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
      {/*<Button text="Send Message" type="submit" /> */}
      </form>
    </div>
  );
}

export default Form;