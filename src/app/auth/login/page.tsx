"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import type { ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
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
    const res = await signIn("credentials", {
      redirect: false,
      email: formValues.email,
      password: formValues.password,
      callbackUrl: "/admin",
    });

    if (res?.error) {
      setLoading(false);
      toast.update(toastId, {
        render:
          res.error == "CredentialsSignin"
            ? "Email/Password Salah"
            : "Internal server error",
        autoClose: 3000,
        isLoading: false,
        type: "error",
      });
    } else {
      router.push("/admin");
      toast.update(toastId, {
        render: "Login sukses!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-10 rounded border-2 border-gray-200 p-6 md:bg-white">
        <div className="mb-6 flex justify-center md:justify-start">
          <h1 className="text-2xl font-bold text-red-700">Logo</h1>
        </div>
        <div className="mb-6 flex flex-col justify-center gap-2 md:justify-start">
          <h1 className="text-xl font-bold text-black">
            Selamat Datang di MITFest
          </h1>
          <span className="font-normal text-gray-500">
            Pengguna baru di MITFest?{" "}
            <Link href="/auth/register" className="font-semibold text-red-700">
              Daftar
            </Link>
          </span>
        </div>
        <form
          action="/api/auth/callback/credentials"
          onSubmit={onSubmit}
          method="POST"
          className="space-y-4"
        >
          <div>
            <input
              className="w-full rounded border border-gray-400 bg-gray-50 p-3 text-sm text-gray-600 focus:outline-none"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="w-full rounded border border-gray-400 bg-gray-50 p-3 text-sm text-gray-600 focus:outline-none"
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div>
            <Link
              className="text-sm font-semibold text-red-700"
              href="/auth/forgot-password"
            >
              Lupa kata sandi?
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="mt-4 w-full rounded bg-red-700 py-2 text-gray-50 transition duration-200 hover:bg-red-700 disabled:bg-red-500 disabled:text-gray-200"
              disabled={loading}
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
            </button>
            <div className="inline-flex w-full items-center justify-center align-middle text-neutral-500/70 ">
              <hr className=" h-px w-full border-0 bg-neutral-500" />
              <span className="mx-2 text-xs font-medium">atau</span>
              <hr className="h-px w-full border-0 bg-neutral-500" />
            </div>
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="flex w-full justify-center gap-2 self-center rounded bg-gray-200 py-2 text-sm font-bold text-black transition duration-200 hover:bg-gray-300"
            >
              <img
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google"
                width={24}
                height={24}
              />
              Masuk dengan Google
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
