import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null;
}
