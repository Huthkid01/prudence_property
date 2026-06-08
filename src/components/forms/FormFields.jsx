export function FormMessage({ status, error, successMessage }) {
  if (status === "success") {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-green-800 text-sm">
        {successMessage}
      </div>
    );
  }

  if (status === "error" && error) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-800 text-sm">
        {error}
      </div>
    );
  }

  return null;
}

export function FormField({ label, id, required, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-primary mb-2"
      >
        {label}
        {required && <span className="text-secondary ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

export const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-primary placeholder:text-slate-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-colors";
