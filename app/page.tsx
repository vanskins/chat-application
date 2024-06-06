// @ts-nocheck
"use client"
import React, { useEffect, useState } from "react";
import moment from 'moment';
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { db } from "./firebase"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Home() {
  const [messages, setMessages] = useState<any>([])
  const [username, setUsername] = useState("")
  const [showUsernameModal, setShowUsernameModal] = useState<boolean>(false)
  const [myMessage, setMyMessage] = useState<any>("")
  const [showEmojis, setShowEmojis] = useState(false);

  const addMessage = async (e: any) => {
    e.preventDefault();
    const usernameLocalStorage = localStorage.getItem('chatUsername');
    if (usernameLocalStorage === null) {
      setShowUsernameModal(true)
    } else {
      try {
        await addDoc(collection(db, "messages"), {
          message: myMessage,
          username,
          createdAt: moment().format()
        });
        setMyMessage("")
      } catch (e) {
        console.log(e, 'Error sending message')
      }
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

  useEffect(() => {
    const token = localStorage.getItem('chatToken');
    const username = localStorage.getItem('chatUsername');
    if (token === null && username === null) {
      const ranToken = uuidv4()
      localStorage.setItem('chatToken', ranToken)
    }
    if (username === null) {
      setShowUsernameModal(true)
    } else {
      setUsername(username)
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

  const openModal = () => {
    setShowUsernameModal(true)
  }

  const closeModal = () => {
    setShowUsernameModal(false)
  }
  return (
    <div className="container mx-auto h-full">
      <div className="h-full pt-36">
        <h1 className="text-center text-3xl font-bold pt-5">Chat Application</h1>
        <p className="text-center">Created by: Van Alfred</p>
        <p className="text-center">version: 0.0.2</p>
        <div className="chat-container w-full">
          {
            username.length === 0 && <button className="text-blue-400 font-bold" onClick={openModal}>Set username</button>
          }
          <div className="chat-area overflow-auto h-96 w-full rounded-2xl p-4 bg-slate-100 mt-2">
            {
              messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((i: any, k: number) => {
                if (i.username === username) {
                  return (
                    <div key={k} className="flex flex-row justify-end">
                      <div className="p-2 flex flex-col w-1/2 bg-green-400 mt-2 rounded-2xl">
                        <div className="chat-component flex flex-row justify-end">
                          <div>
                            <p className="text-blue-500 font-bold">You ({i.username}):</p>
                          </div>
                          <div>
                            <p className="font-semibold mx-2">{i.message}</p>
                          </div>
                        </div>
                        <div className="mx-2 flex flex-row justify-end"><p className="font-normal text-xs">{moment(i.createdAt).fromNow()}</p></div>
                      </div>
                    </div>
                  )
                }
                return (
                  <div className="p-2 w-1/2 bg-slate-200 mt-2 rounded-2xl" key={k}>
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
          </div>
          <div className="relative">
            {
              showEmojis &&
              <div className="absolute bottom-0 right-0 pb-12 pr-4">
                <Picker
                  style={{}}
                  data={data}
                  onEmojiSelect={(emoji: any) => {
                    setMyMessage(`${myMessage}${emoji.native}`)
                  }}
                  onClickOutside={() => setShowEmojis(false)}
                />
              </div>
            }
            <div className="chat buttons pt-2 flex flex-row justify-center">
              <input
                disabled={username.length === 0}
                onChange={(e) => {
                  setMyMessage(e.target.value)
                }}
                value={myMessage}
                className="h-10 w-5/6 bg-slate-200 px-2 border-0 outline-none rounded-l-lg" placeholder="what's on your mind?"
              />
              <button onClick={() => setShowEmojis(!showEmojis)} className="h-10 p-1 w-10 bg-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button
                disabled={myMessage.length === 0}
                onClick={addMessage}
                className={`w-1/6 h-10 text-white font-bold rounded-r-lg ${myMessage.length === 0 ? 'bg-gray-400' : 'bg-green-600'} `}
              >
                Send
              </button>
            </div>
          </div>
          <div>
            <Modal
              ariaHideApp={false}
              isOpen={showUsernameModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h1 className="text-center font-bold">Welcome to my Chat application</h1>
              <p className="text-center mb-2">Please set your username to proceed.</p>
              <input onChange={(e) => {
                setUsername(e.target.value)
              }} className="h-10 w-5/6 bg-slate-200 px-2 border-0 outline-none rounded-l-lg" placeholder="username" />
              <button
                disabled={username.length === 0}
                onClick={(e) => {
                  e.preventDefault()
                  if (username.length > 0) {
                    localStorage.setItem('chatUsername', username)
                    setShowUsernameModal(false)
                  }
                }}
                className={`w-1/6 h-10 text-white font-bold rounded-r-lg ${username.length === 0 ? 'bg-gray-300' : 'bg-blue-600'}`}
              >
                SET
              </button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
