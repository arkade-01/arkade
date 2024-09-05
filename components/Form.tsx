import { useState } from "react";
import Button from "./Button";

interface FormProps {
  initialName: string;
  initialEmail: string;
  initialSubject: string;
  initialMessage: string;
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

  function onsubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name,
        email,
        subject,
        message,
      })
    );
  }

  return (
    <div className="max-w-full mb-12">
      <form action="" className="mt-10" onSubmit={onsubmit}>
        <div className="flex gap-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="bg-[#2D2D2D] w-full rounded-lg placeholder:text-[#FFFFFF66] placeholder:pl-3 px-4 py-3 text-white xs:text-xs xr:text-sm sm:text-base"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#2D2D2D] w-full rounded-lg placeholder:text-[#FFFFFF66] placeholder:pl-3 px-4 py-3 text-white xs:text-xs xr:text-sm sm:text-base"
          />
        </div>
        <div className="mt-5 mb-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            value={subject}
            required
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-[#2D2D2D] mb-5 w-full rounded-lg placeholder:text-[#FFFFFF66] placeholder:pl-3 px-4 py-3 text-white xs:text-xs xr:text-sm sm:text-base"
          />
          <textarea
            name=""
            id=""
            rows={10}
            placeholder="Message"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-[#2D2D2D] w-full rounded-lg placeholder:text-[#FFFFFF66] placeholder:pl-3 px-4 py-3 text-white xs:text-xs xr:text-sm sm:text-base active:border-none active:border-transparent resize-none overflow-hidden"
          />
        </div>
      </form>
    </div>
  );
}
export default Form;
