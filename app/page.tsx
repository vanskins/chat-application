export default function Home() {
  return (
    <div className="container mx-auto grid justify-items-center ">
      <h1 className="text-center text-3xl font-bold pt-20">Chat Application</h1>
      <p>Created by: Van Alfred</p>
      <div className="chat-container w-full p-20">
        <div className="chat-area h-96 w-full border-2 rounded-lg bg-slate-100">
          <div className="p-2">
            <div className="chat-component flex flex-row">
              <div>
                <p className="text-blue-500 font-bold">Van Alfreds:</p>
              </div>
              <div>
                <p className="font-semibold mx-2">Kamusta?</p>
              </div>
            </div>
            <p className="font-normal text-xs">01/11/2024</p>
          </div>
          <div className="p-2 flex flex-col">
            <div className="chat-component flex flex-row justify-end">
              <div>
                <p className="text-blue-500 font-bold">Sabb:</p>
              </div>
              <div>
                <p className="font-semibold mx-2">Okay ra. HAHAH</p>
              </div>
            </div>
            <div className="mx-2 flex flex-row justify-end"><p className="font-normal text-xs">01/11/2024</p></div>
          </div>
          <div className="p-2 flex flex-col">
            <div className="chat-component flex flex-row justify-end">
              <div>
                <p className="text-blue-500 font-bold">Sabb:</p>
              </div>
              <div>
                <p className="font-semibold mx-2">Test application lore</p>
              </div>
            </div>
            <div className="mx-2 flex flex-row justify-end"><p className="font-normal text-xs">01/11/2024</p></div>
          </div>
        </div>
        <div className="chat buttons pt-2">
          <input className="h-10 w-5/6 bg-slate-200 px-2 border-0 outline-none rounded-l-lg" placeholder="what's on your mind?" />
          <button className="w-1/6 h-10 text-white font-bold rounded-r-lg bg-green-600">Send</button>
        </div>
      </div>
    </div>
  );
}
