import { useState, useRef } from "react";
import { useFormSubmit } from "../../hooks/useFormSubmit";
import { FormMessage, FormField, inputClasses } from "./FormFields";
import { careerPositions } from "../../data/content";

export default function CareerForm() {
  const { sendForm, status, error, resetStatus } = useFormSubmit("career");
  const fileInputRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    resetStatus();
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    resetStatus();
    setResumeFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendForm(form, resumeFile);
    if (success) {
      setForm({ name: "", email: "", position: "", message: "" });
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FormMessage
        status={status}
        error={error}
        successMessage="Thank you for your application! Our HR team will review your submission and be in touch."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Name" id="career_name" required>
          <input
            type="text"
            id="career_name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Your full name"
          />
        </FormField>

        <FormField label="Email" id="career_email" required>
          <input
            type="email"
            id="career_email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="you@example.com"
          />
        </FormField>
      </div>

      <FormField label="Position Applying For" id="position" required>
        <select
          id="position"
          name="position"
          value={form.position}
          onChange={handleChange}
          required
          className={inputClasses}
        >
          <option value="">Select a position</option>
          {careerPositions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Resume Upload" id="resume">
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            id="resume"
            name="attachment"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-dashed border-slate-300 bg-surface px-4 py-3 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-900 cursor-pointer"
          />
        </div>
        <p className="mt-1.5 text-xs text-muted">
          Accepted formats: PDF, DOC, DOCX (max 5MB)
        </p>
      </FormField>

      <FormField label="Message" id="career_message">
        <textarea
          id="career_message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about yourself and why you'd like to join our team..."
        />
      </FormField>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-primary hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
