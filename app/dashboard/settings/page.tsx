export default function Page() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <h2 className="text-lg font-medium ">Change Password</h2>
      <form className="flex flex-col gap-3 w-full">
        <div className="flex flex-col items-start">
          <label htmlFor="current">Current Password:</label>
          <input id="current" type="text" placeholder="current password" className="indent-2 rounded-xl py-3 bg-transparent w-[550px] border border-solid border-black"/>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="new">New Password:</label>
          <input id="new" type="text" placeholder="new password" className="indent-2 rounded-xl py-3 bg-transparent w-[550px] border border-solid border-black"/>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="confirm">Confirm Password:</label>
          <input id="confirm" type="text" placeholder="confirm password" className="indent-2 rounded-xl py-3 bg-transparent w-[550px] border border-solid border-black"/>
        </div>
        <button className="mt-5 px-6 py-3 text-white font-medium text-sm bg-black/70 hover:bg-black/60 w-max rounded-md">Submit</button>
      </form>
    </main>
  );
}
