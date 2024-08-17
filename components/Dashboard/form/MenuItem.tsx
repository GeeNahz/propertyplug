import "./MenuItem.css";
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";

export default function MenuItem({
  icon,
  title,
  action,
  isActive = null,
}: {
  icon?: any;
  title?: string;
  action?: () => void;
  isActive?: (() => boolean) | null;
}) {
  const UseIcon = icon
  return (
    <div
    //   type="button"
      className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
      onClick={action}
      title={title}
    >
      {/* <svg className="remix">
        <use xlinkHref={`${remixiconUrl as any}#ri-${icon}`} />
      </svg> */}
      <UseIcon className='remix'/>
    </div>
  );
}
