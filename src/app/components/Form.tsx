import type { ChangeEvent } from "react";

interface TextInputProps {
  name: string;
  type: "email" | "text" | "password";
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
  required?: boolean;
  pattern?: string;
}

export function TextInput({
  name,
  type,
  handleChange,
  className,
  placeholder,
  required,
  pattern,
}: TextInputProps) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        onChange={handleChange}
        className={
          "peer block w-full appearance-none rounded-lg border border-neutral-500 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white autofill:hover:bg-black focus:border-black focus:ring-0 autofill:focus:bg-black autofill:active:bg-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 " +
          className
        }
        placeholder=" "
        required={required}
        pattern={pattern}
      />
      <label
        htmlFor={name}
        className={
          "pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-black px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        }
      >
        {placeholder}
      </label>
    </div>
  );
}
