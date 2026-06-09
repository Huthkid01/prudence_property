import { useState } from "react";
import {
  appendFormSubmitMeta,
  getFormSubmitAction,
} from "../config/formSubmit";

const FORM_ENDPOINT = getFormSubmitAction({ ajax: true });

async function postFormData(formData) {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  const result = await response.json();

  if (!response.ok || result.success === "false") {
    throw new Error(result.message || "Failed to send message.");
  }

  return result;
}

export function useFormSubmit(formType = "contact") {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const sendForm = async (fields) => {
    setStatus("loading");
    setError("");

    const formData = new FormData();

    Object.entries(fields).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        formData.append(key, value);
      }
    });

    appendFormSubmitMeta(formData, {
      formType,
      pageUrl: window.location.href,
    });

    try {
      await postFormData(formData);
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
