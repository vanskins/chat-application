"use client"
import { useEffect, useState } from "react";
import moment from 'moment';
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config"
export default function Home() {
  const [messages, setMessages] = useState<any>([])
  const [myMessage, setMyMessage] = useState<any>({ username: "vanskins", message: "HELLO FROM REACT APP" })
  const addMessage = async (e: any) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        ...myMessage,
        createdAt: moment().format()
      });
      setMyMessage({})
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    const messagesRef = collection(db, 'messages')
    const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setMessages(data)
    })

    return () => {
      unsubscribe()
    }
  }, [])


  const fetchData = async () => {
    try {
      await getDocs(collection(db, "messages"))
        .then((querySnapshot) => {
          const newData = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
          setMessages(newData);
        })
    } catch (error) {
      console.log(error, 'ERRROR')
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  console.log(messages, 'MEsssages')
  return (
    <div className="container mx-auto grid justify-items-center ">
      <h1 className="text-center text-3xl font-bold pt-20">Chat Application</h1>
      <p>Created by: Van Alfred</p>
      <div className="chat-container w-full p-20">
        <div className="chat-area h-96 w-full border-2 rounded-lg bg-slate-100">
          {
            messages.map((i, k) => {
              return (
                <div className="p-2" key={k}>
                  <div className="chat-component flex flex-row">
                    <div>
                      <p className="text-blue-500 font-bold">{i.username}:</p>
                    </div>
                    <div>
                      <p className="font-semibold mx-2">{i.message}</p>
                    </div>
                  </div>
                  <p className="font-normal text-xs">{moment(i.createdAt).fromNow()}</p>
                </div>
              )
            })
          }

          {/* <div className="p-2 flex flex-col">
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
          </div> */}
        </div>
        <div className="chat buttons pt-2">
          <input onChange={(e) => {
            setMyMessage({ username: 'vanskins', message: e.target.value })
          }} className="h-10 w-5/6 bg-slate-200 px-2 border-0 outline-none rounded-l-lg" placeholder="what's on your mind?" />
          <button onClick={addMessage} className="w-1/6 h-10 text-white font-bold rounded-r-lg bg-green-600">Send</button>
        </div>
      </div>
    </div>
  );
}
