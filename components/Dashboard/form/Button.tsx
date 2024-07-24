export default function Button({ disabled, name, classes, action }: { disabled: boolean; name: string; classes?: string; action?: (formData: FormData) => void }) {
  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      formAction={action}
      type="submit"
      className={`capitalize disabled:opacity-50 rounded-full py-3 px-6 bg-ui-dark text-gray-50 text-sm font-semibold ${classes}`}
    >
      {disabled ? `${name}...` : name}
    </button>
  )
}
