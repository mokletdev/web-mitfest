"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { redirect, useRouter } from "next/navigation";
import { FormButton } from "@/app/components/Button";
import { forgotPasswordAction } from "./action";

export default function ForgotPassword() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    setLoading(true);
    const user = await forgotPasswordAction(formValues.email);
    if (!user) {
      setLoading(false);
      toast.update(toastId, {
        render: "Pengguna tidak ditemukan!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      setLoading(false);
      toast.update(toastId, {
        render: "Sukses!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      toast.success("Ikuti instruksi pada email untuk melanjutkan!");
    }
  };

  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-10 rounded p-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="relative inline-block rounded-full border border-gray-500 bg-transparent p-5 transition-all duration-300 hover:bg-gray-600"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-current"
          >
            <path
              d="M15 19.92L8.48003 13.4C7.71003 12.63 7.71003 11.37 8.48003 10.6L15 4.08002"
              stroke="#8E8E8E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="mb-6 flex flex-col justify-center gap-2 md:justify-start">
          <h6 className="mb-3 text-[28px] leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Lupa Kata Sandi
          </h6>
          <span className="text-neutral-500">
            Masukkan email Akun untuk melakukan reset kata sandi
          </span>
        </div>
        <form
          action="/api/auth/callback/credentials"
          onSubmit={onSubmit}
          method="POST"
          className="group"
          noValidate
        >
          <div className="relative">
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="peer block w-full appearance-none rounded-lg border border-neutral-500 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white autofill:hover:bg-black focus:border-black focus:ring-0 autofill:focus:bg-black autofill:active:bg-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-black px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Email
            </label>
          </div>
          <FormButton
            type="submit"
            className="mt-12 w-full justify-center group-invalid:pointer-events-none group-invalid:opacity-30"
            disabled={loading}
            variant="red"
          >
            <div>
              Masuk
              <div
                className={`${
                  loading ? "inline-block" : "hidden"
                } h-4 w-4 animate-spin snap-center rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          </FormButton>
        </form>
      </div>
    </section>
  );
}
