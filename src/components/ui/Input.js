export default function Input({ placeholder, className = "", ...props }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border  border-border  rounded-md px-3 py-2  text-sm ${className}`}
      {...props}
    />
  );
}