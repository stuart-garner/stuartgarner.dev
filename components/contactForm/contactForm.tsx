import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xeqwqlpj");
  if (state.succeeded) {
    return <p className="text-gray-50">Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 text-gray-50"
    >
      <span className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-600">
          Email Address:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className=" rounded-xl bg-gray-50 p-5 text-gray-600"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </span>

      <span className="flex flex-col gap-2">
        <label htmlFor="message" className="text-gray-600">
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="min-h-[200px] rounded-xl p-5 text-gray-600"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </span>
      <button type="submit" disabled={state.submitting} className="button">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
