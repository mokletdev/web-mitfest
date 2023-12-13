import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  variant?: "red" | "dark";
  withArrow?: boolean;
  children?: ReactNode;
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export function LinkButton({
  className,
  variant,
  children,
  withArrow,
  href,
}: LinkButtonProps) {
  const redButton = variant === "red";

  if (redButton) {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-1 rounded-full border border-primary-400 bg-primary-500 px-7 py-2 text-white transition duration-300 hover:bg-primary-600 ${className}`}
      >
        {children}
        {withArrow && (
          <svg
            className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3225 4.44727L15.875 8.99977L11.3225 13.5523"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.125 9H15.7475"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1 rounded-full border border-gray-600 bg-black px-7 py-2 text-white transition duration-300 hover:bg-gray-700 ${className}`}
    >
      {children}
      {withArrow && (
        <svg
          className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3225 4.44727L15.875 8.99977L11.3225 13.5523"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.125 9H15.7475"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}

interface FormButtonProps extends ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function FormButton({
  className,
  variant,
  children,
  withArrow,
  type,
  disabled,
  onClick,
}: FormButtonProps) {
  const redButton = variant === "red";

  if (redButton) {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`group inline-flex items-center gap-1 rounded-full border border-primary-400 bg-primary-500 px-7 py-2 text-white transition duration-300 hover:bg-primary-600 disabled:bg-primary-700 disabled:text-gray-200 ${className}`}
        disabled={disabled}
      >
        {children}
        {withArrow && (
          <svg
            className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3225 4.44727L15.875 8.99977L11.3225 13.5523"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.125 9H15.7475"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`group inline-flex items-center gap-1 rounded-full border border-gray-600 bg-black px-7 py-2 text-white transition duration-300 hover:bg-gray-700 disabled:bg-primary-700 disabled:text-gray-200 ${className}`}
      disabled={disabled}
    >
      {children}
      {withArrow && (
        <svg
          className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3225 4.44727L15.875 8.99977L11.3225 13.5523"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.125 9H15.7475"
            stroke="white"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
