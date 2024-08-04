import { MdError } from "react-icons/md";
import { FaArrowRightToBracket, FaEnvelope, FaKey } from "react-icons/fa6";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import { login } from "@/lib/lib";

export default async function LoginForm() {
  let isPending: boolean = false;
  let err: any = null;

  async function authenticate(formData: FormData) {
    isPending = true;

    try {
      const token = await login(formData);

      if (!token) return;

      Cookies.set("session", token, {
        expires: new Date(new Date().getTime() + 10 * 60 * 1000),
      });
      isPending = false;
    } catch (error: any) {
      console.log("Error:", error);
      err = error;
      isPending = false;
    } finally {
      if (err instanceof AxiosError) {
        switch (err.response?.data.type) {
          case "CredentialsSignin":
            return "Invalid credentials.";
          case "CallbackRouteError":
            return "Email or password is incorrect";
          default:
            return "Something went wrong.";
        }
      } else {
        err = "unable to login you at the moment";
      }
    }

    redirect("/dashboard"); // Redirecting to the dashboard
  }
  return (
    <form action={authenticate} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-5 text-2xl text-center font-semibold`}>Login</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChage}
                placeholder="Enter your email address"
                required
              />
              <FaEnvelope className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                // value={formData.password}
                // onChange={handleChage}
                placeholder="Enter password"
                required
                minLength={6}
              />
              <FaKey className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <button
          className="mt-4 w-full flex items-center justify-center gap-3 bg-ui-dark py-[9px] px-4 rounded-md text-white hover:bg-ui-dark/80 active:bg-ui-dark/80 focus:bg-ui-dark/80 disabled:bg-ui-dark/50 transition-colors text-sm font-semibold"
          aria-disabled={isPending}
          disabled={isPending}
        >
          Log in <FaArrowRightToBracket size={18} />
        </button>
        <div
          className="flex items-center justify-center gap-1 w-full h-8 space-x-1 text-xs"
          aria-live="polite"
          aria-atomic="true"
        >
          {err && (
            <>
              <MdError className="size-4 text-red-500" />
              <p className="text-red-500">{err}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
