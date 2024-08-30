import "./MenuItem.css";

export default function ToolbarItem({
  children,
  title,
  action,
  isActive = null,
}: {
  children?: React.ReactNode;
  title?: string;
  action?: () => void;
  isActive?: (() => boolean) | null;
}) {
  return (
    <div
      className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
      onClick={action ? action : () => null}
      title={title}
    >
      <div className="remix">{children}</div>
    </div>
  );
}

