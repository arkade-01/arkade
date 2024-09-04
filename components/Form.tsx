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
    <div className="max-w-4xl mb-10">
      <form action="" className="mt-10" onSubmit={onsubmit}>
        <div className="flex gap-5">
          <input
            type="text"
            name=""
            id=""
            className="bg-[#2D2D2D] w-full placeholder:text-[#FFFFFF66] text-[16px] lg:text-[30px] placeholder:pl-3 px-4 py-3 text-white "
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name=""
            id=""
            className="bg-[#2D2D2D] w-full placeholder:text-[#FFFFFF66] text-[16px] lg:text-[30px]  placeholder:pl-3 px-4 py-3 text-white"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-5 mb-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-[#2D2D2D] mb-5 w-full placeholder:text-[#FFFFFF66] text-[16px] lg:text-[30px]  placeholder:pl-3 px-4 py-3 text-white"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-[#2D2D2D] h-[250px] w-full placeholder:text-[#FFFFFF66] text-[16px] lg:text-[30px]  placeholder:pl-3 px-4 py-3 text-white text-wrap active:border-none active:border-transparent"
          />
        </div>
        <Button text="Submit"/>
      </form>
    </div>
  );
}
export default Form;
