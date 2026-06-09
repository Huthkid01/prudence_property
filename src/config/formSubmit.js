/** All FormSubmit contact and career submissions are delivered here. */
export const FORM_SUBMIT_EMAIL = "info@prudenceproperty.com";

export function getFormSubmitAction({ ajax = false } = {}) {
  const encodedEmail = encodeURIComponent(FORM_SUBMIT_EMAIL);
  return ajax
    ? `https://formsubmit.co/ajax/${encodedEmail}`
    : `https://formsubmit.co/${encodedEmail}`;
}

export function appendFormSubmitMeta(formData, { formType, pageUrl }) {
  formData.append(
    "_subject",
    formType === "career"
      ? "Career Application - Prudence Property"
      : "New Contact Inquiry - Prudence Property"
  );
  formData.append("_template", "table");
  formData.append("_captcha", "false");

  if (pageUrl) {
    formData.append("_url", pageUrl);
  }
}
