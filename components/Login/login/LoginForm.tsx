'use client'


import { MdAddTask, MdError, MdKey, MdLogin } from "react-icons/md"
import { useActionState } from 'react';
import { authenticate } from "@/lib/actions";
import { FaArrowRightToBracket, FaEnvelope, FaKey } from "react-icons/fa6";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  )
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-5 text-2xl text-center font-semibold`}>
          Login
        </h1>
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
          {errorMessage && (
            <>
              <MdError className="size-4 text-red-500" />
              <p className="text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  )
}