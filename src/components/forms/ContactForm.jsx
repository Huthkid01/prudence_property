import { useState } from "react";
import { useFormSubmit } from "../../hooks/useFormSubmit";
import { FormMessage, FormField, inputClasses } from "./FormFields";

export default function ContactForm() {
  const { sendForm, status, error, resetStatus } = useFormSubmit("contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    resetStatus();
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendForm(form);
    if (success) {
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FormMessage
        status={status}
        error={error}
        successMessage="Thank you! Your message has been sent successfully. We'll get back to you soon."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Name" id="name" required>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Your full name"
          />
        </FormField>

        <FormField label="Email" id="email" required>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="you@example.com"
          />
        </FormField>
      </div>

      <FormField label="Phone" id="phone">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="0815 952 4123"
        />
      </FormField>

      <FormField label="Message" id="message" required>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="How can we help you?"
        />
      </FormField>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
