'use client'


import { changePassword } from "@/lib/actions";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState, useActionState } from "react";
import { FaKey } from "react-icons/fa";

function PasswordInput(
  {
    id, name, placeholder, label,
  }: {
    id: string; name: string; placeholder?: string; label?: string;
  }
) {
  const [see, setSee] = useState(false);

  return (
    <div className="mt-4">
      <label
        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
        htmlFor={id}
      >
        {label ? label : name}
      </label>
      <div className="relative">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          id={id}
          type={see ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          required
        />
        <FaKey className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        {see ? (
          <EyeIcon
            className="absolute top-2 right-3 cursor-pointer"
            onClick={() => setSee(!see)}
          />
        ) : (
          <EyeOffIcon
            className="absolute top-2 right-3 cursor-pointer"
            onClick={() => setSee(!see)}
          />
        )}
      </div>
    </div>
  )
}

export default function Page() {
  const [state, dispatch, isPending] = useActionState(changePassword, undefined)

  return (
    <main className="flex flex-col gap-4 w-full justify-center items-center">
      <h2 className="text-2xl font-semibold mb-3 ">Change Password</h2>

      <form action={dispatch} className="space-y-3 w-full max-w-lg">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 py-4 space-y-8">
          <div className="w-full">

            <PasswordInput
              name="current_password"
              id="current_password"
              placeholder="Enter current password"
              label="Current password"
            />

            <p className="text-ui-red text-xs h-1">{state && <span>{state.errors.current_password && state.errors.current_password}</span>}</p>

            <PasswordInput
              name="new_password"
              id="new_password"
              placeholder="Enter new password"
              label="New password"
            />
            <p className="text-ui-red text-xs h-1">{state && <span>{state.errors.new_password && state.errors.new_password}</span>}</p>

            <PasswordInput
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm password"
              label="Confirm password"
            />
            <p className="text-ui-red text-xs h-1">{state && <span>{state.errors.confirm_password && state.errors.confirm_password}</span>}</p>

          </div>

          <button
            className="mt-4 w-full flex items-center justify-center gap-3 bg-ui-dark py-[9px] px-4 rounded-md text-white hover:bg-ui-dark/80 active:bg-ui-dark/80 focus:bg-ui-dark/80 disabled:bg-ui-dark/50 disabled:cursor-not-allowed transition-colors text-sm font-semibold"
            aria-disabled={isPending}
            disabled={isPending}
          >
            Change password
          </button>
        </div>
      </form>
    </main>
  );
}
