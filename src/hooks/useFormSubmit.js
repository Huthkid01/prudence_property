import { useState } from "react";
import { contactInfo } from "../data/content";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${contactInfo.email}`;

export function useFormSubmit(formType = "contact") {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const sendForm = async (fields, file = null) => {
    setStatus("loading");
    setError("");

    const formData = new FormData();

    Object.entries(fields).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        formData.append(key, value);
      }
    });

    if (file) {
      formData.append("attachment", file);
    }

    formData.append(
      "_subject",
      formType === "career"
        ? "Career Application - Prudence Property"
        : "New Contact Inquiry - Prudence Property"
    );
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus("success");
      return true;
    } catch (err) {
      setStatus("error");
      setError(
        err.message ||
          "Failed to send message. Please try again or email us directly."
      );
      return false;
    }
  };

  const resetStatus = () => {
    setStatus("idle");
    setError("");
  };

  return { sendForm, status, error, resetStatus };
}
