import Image from "next/image";
import { toast } from "react-toastify";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { redirect, useRouter } from "next/navigation";
import { FormButton } from "@/app/components/Button";

export default function ResetPassword() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    new_password: "",
    confirm_password: "",
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
    // Send email logic here
    redirect("/auth/confirmation");
  };
  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-10 rounded p-6">
        <div className="mb-6 flex flex-col justify-center gap-2 md:justify-start">
          <h6 className="mb-3 text-[28px] leading-[36px] text-white sm:text-[32px] sm:leading-[40px]">
            Buat Password Baru
          </h6>
          <span className="text-neutral-500">
            Masukkan kata sandi baru yang aman dan mudah diingat
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
              name="new_password"
              type="password"
              onChange={handleChange}
              className="peer block w-full appearance-none rounded-lg border border-neutral-500 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white autofill:hover:bg-black focus:border-black focus:ring-0 autofill:focus:bg-black autofill:active:bg-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="new_password"
              className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-black px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              New Password
            </label>
          </div>
          <div className="relative">
            <input
              name="confirm_password"
              type="password"
              onChange={handleChange}
              className="peer block w-full appearance-none rounded-lg border border-neutral-500 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white autofill:hover:bg-black focus:border-black focus:ring-0 autofill:focus:bg-black autofill:active:bg-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="confirm_password"
              className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-black px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Confirm Password
            </label>
          </div>
          <div>
            <FormButton
              type="submit"
              className="mt-11 w-full justify-center disabled:pointer-events-none disabled:opacity-30 group-invalid:pointer-events-none group-invalid:opacity-30"
              disabled={
                loading ||
                formValues.confirm_password !== formValues.new_password
              }
              variant="red"
            >
              <div>
                Konfirmasi
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
          </div>
        </form>
      </div>
    </section>
  );
}
