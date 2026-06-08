import { useState, useRef } from "react";
import { FormMessage, FormField, inputClasses } from "./FormFields";
import { careerPositions, contactInfo } from "../../data/content";

const FORM_ACTION = `https://formsubmit.co/${contactInfo.email}`;

export default function CareerForm() {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const pendingSubmit = useRef(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [resumeName, setResumeName] = useState("");

  const resetStatus = () => {
    if (status !== "loading") {
      setStatus("idle");
      setError("");
    }
  };

  const handleChange = (e) => {
    resetStatus();
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    resetStatus();
    const file = e.target.files?.[0];
    setResumeName(file ? file.name : "");
  };

  const handleIframeLoad = () => {
    if (!pendingSubmit.current) return;
    pendingSubmit.current = false;
    setStatus("success");
    setForm({ name: "", email: "", position: "", message: "" });
    setResumeName("");
    formRef.current?.reset();
  };

  const handleSubmit = (e) => {
    const file = fileInputRef.current?.files?.[0];

    if (!file) {
      e.preventDefault();
      setStatus("error");
      setError("Please attach your resume before submitting.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      e.preventDefault();
      setStatus("error");
      setError("Resume file must be 5MB or smaller.");
      return;
    }

    pendingSubmit.current = true;
    setStatus("loading");
    setError("");
  };

  return (
    <>
      <iframe
        name="career-form-iframe"
        title="Career form submission"
        className="hidden"
        onLoad={handleIframeLoad}
      />

      <form
        ref={formRef}
        action={FORM_ACTION}
        method="POST"
        encType="multipart/form-data"
        target="career-form-iframe"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          type="hidden"
          name="_subject"
          value="Career Application - Prudence Property"
        />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

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

        <FormField label="Resume Upload" id="resume" required>
          <input
            ref={fileInputRef}
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            required
            className="w-full rounded-lg border border-dashed border-slate-300 bg-surface px-4 py-3 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-900 cursor-pointer"
          />
          {resumeName && (
            <p className="mt-1.5 text-xs text-secondary font-medium">
              Selected: {resumeName}
            </p>
          )}
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
    </>
  );
}
