"use client";

import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import type { ChangeEvent } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";
import { FormButton } from "@/app/components/Button";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const [formValues, setFormValues] =
    useState<Prisma.usersUncheckedCreateInput>({
      email: "",
      password: "",
      name: "",
      v: 0,
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
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formValues),
    });

    if (!res.ok) {
      setLoading(false);
      toast.update(toastId, {
        render: "Error",
        autoClose: 3000,
        isLoading: false,
        type: "error",
      });
    } else {
      router.push("/auth/login");
      toast.update(toastId, {
        render: "Daftar sukses!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  if (session?.user) return redirect("/dashboard");

  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-10 rounded p-6">
        <div className="mb-[52px] flex justify-center text-left md:justify-start">
          <h1 className="w-full text-2xl font-bold text-white">Logo</h1>
        </div>
        <div className="mb-6 flex flex-col justify-center gap-2 md:justify-start">
          <h6 className="mb-3 text-[28px] leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Daftar Sekarang dan Raih Prestasi
          </h6>
          <span className="text-neutral-500">
            Sudah memiliki akun?{" "}
            <Link href="/auth/login" className="text-white hover:underline">
              Masuk
            </Link>
          </span>
        </div>
        <form
          action="/api/auth/callback/credentials"
          onSubmit={onSubmit}
          method="POST"
          className="group space-y-4"
          noValidate
        >
          <div className="relative">
            <input
              name="name"
              type="text"
              onChange={handleChange}
              className="peer block w-full appearance-none rounded-lg border border-neutral-500 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white autofill:hover:bg-black focus:border-black focus:ring-0 autofill:focus:bg-black autofill:active:bg-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              placeholder=" "
              pattern="[A-Za-z\s]+"
              required
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-black px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Nama Lengkap
            </label>
          </div>
          <div className="relative">
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="peer block w-full appearance-none rounded-lg border border-neutral-500 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white autofill:hover:bg-black focus:border-black focus:ring-0 autofill:focus:bg-black autofill:active:bg-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              placeholder=" "
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-black px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              name="password"
              type="password"
              onChange={handleChange}
              className="peer block w-full appearance-none rounded-lg border border-neutral-500 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white autofill:hover:bg-black focus:border-black focus:ring-0 autofill:focus:bg-black autofill:active:bg-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-black px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Password
            </label>
          </div>
          <div className="flex flex-col gap-8">
            <FormButton
              type="submit"
              className="mt-4 w-full justify-center group-invalid:pointer-events-none group-invalid:opacity-30"
              variant="red"
              disabled={loading}
            >
              <div>
                Daftar
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
            <div className="relative w-full">
              <svg
                className="absolute left-0 top-1/2 -translate-y-1/2"
                width="185"
                height="2"
                viewBox="0 0 185 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H185" stroke="url(#paint0_linear_1094_9415)" />
                <defs>
                  <linearGradient
                    id="paint0_linear_1094_9415"
                    x1="0"
                    y1="1"
                    x2="185"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8E8E8E" stopOpacity="0" />
                    <stop offset="1" stopColor="#8E8E8E" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="absolute left-1/2 top-1/2 z-[100] h-[22px] w-[50px] -translate-x-1/2 -translate-y-1/2 bg-black text-center text-sm text-white">
                Atau
              </p>
              <svg
                className="absolute right-0 top-1/2 -translate-y-1/2 rotate-180"
                width="185"
                height="2"
                viewBox="0 0 185 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H185" stroke="url(#paint0_linear_1094_9415)" />
                <defs>
                  <linearGradient
                    id="paint0_linear_1094_9415"
                    x1="0"
                    y1="1"
                    x2="185"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8E8E8E" stopOpacity="0" />
                    <stop offset="1" stopColor="#8E8E8E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <FormButton
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              type="submit"
              className="w-full justify-center"
              disabled={loading}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5C10.6583 5.00034 9.34498 5.38626 8.21639 6.11181C7.0878 6.83736 6.1915 7.87197 5.63421 9.09244C5.07692 10.3129 4.88212 11.6678 5.073 12.9959C5.26389 14.3239 5.83241 15.5691 6.71088 16.5833C7.58936 17.5974 8.74077 18.3376 10.028 18.716C11.3153 19.0943 12.6841 19.0947 13.9716 18.7171C15.2591 18.3396 16.4109 17.6 17.29 16.5864C18.1691 15.5728 18.7383 14.3279 18.93 13H13C12.7348 13 12.4804 12.8946 12.2929 12.7071C12.1054 12.5196 12 12.2652 12 12C12 11.7348 12.1054 11.4804 12.2929 11.2929C12.4804 11.1054 12.7348 11 13 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21.0002 14.0811 20.2792 16.098 18.9596 17.7074C17.64 19.3167 15.8035 20.419 13.7627 20.8266C11.7218 21.2342 9.60281 20.9219 7.7663 19.9429C5.9298 18.9639 4.48934 17.3787 3.69012 15.4571C2.89089 13.5356 2.78231 11.3964 3.38286 9.40379C3.9834 7.41118 5.25595 5.68827 6.98388 4.52835C8.71182 3.36843 10.7883 2.84319 12.86 3.04205C14.9316 3.2409 16.8703 4.15156 18.346 5.619C18.5288 5.80707 18.6303 6.05941 18.6288 6.32165C18.6273 6.58389 18.5229 6.83505 18.3379 7.02101C18.153 7.20697 17.9025 7.31285 17.6402 7.31584C17.378 7.31883 17.1251 7.21869 16.936 7.037C16.2874 6.38991 15.5176 5.87696 14.6707 5.52744C13.8237 5.17793 12.9162 4.9987 12 5Z"
                  fill="white"
                />
              </svg>
              Masuk dengan Google
            </FormButton>
          </div>
        </form>
      </div>
    </section>
  );
}
