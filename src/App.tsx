import React, { useState, useEffect, useRef } from "react";
import Core from "@landbot/core";

function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? "bot" : "user",
    timestamp: data.timestamp,
    type: data.type,
  };
}

function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {});
}

function messagesFilter(data) {
  /** Support for basic message types */
  return ["text", "dialog"].includes(data.type);
}

function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
}

export default function App() {
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState("");
  const [config, setConfig] = useState(null);
  const core = useRef(null);

  useEffect(() => {
    fetch("https://chats.landbot.io/u/H-441480-B0Q96FP58V53BJ2J/index.json")
      .then((res) => res.json())
      .then(setConfig);
  }, []);

  useEffect(() => {
    if (config) {
      core.current = new Core(config);
      core.current.pipelines.$readableSequence.subscribe((data) => {
        setMessages((messages) => ({
          ...messages,
          [data.key]: parseMessage(data),
        }));
      });

      core.current.init().then((data) => {
        setMessages(parseMessages(data.messages));
      });
    }
  }, [config]);

  useEffect(() => {
    const container = document.getElementById("landbot-messages-container");
    scrollBottom(container);
  }, [messages]);

  const submit = () => {
    if (input !== "" && core.current) {
      core.current.sendMessage({ message: input });
      setInput("");
    }
  };

  return (
    <>
      <div className="landbot-header">
        <h1 className="subtitle">Landbot core example</h1>
      </div>

      <div
        className="landbot-messages-container"
        id="landbot-messages-container"
      >
        {Object.values(messages)
          .filter(messagesFilter)
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message) => (
            <article
              className="media landbot-message"
              data-author={message.author}
              key={message.key}
            >
              <figure className="media-left landbot-message-avatar">
                <p className="image is-64x64">
                  <img
                    alt=""
                    className="is-rounded"
                    src="http://i.pravatar.cc/100"
                  />
                </p>
              </figure>
              <div className="media-content landbot-message-content">
                <div className="content">
                  <p>{message.text}</p>
                </div>
              </div>
            </article>
          ))}
      </div>

      <div className="landbot-input-container">
        <div className="field">
          <div className="control">
            <input
              className="landbot-input"
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder="Type here..."
              type="text"
              value={input}
            />
            <button
              className="button landbot-input-send"
              disabled={input === ""}
              onClick={submit}
              type="button"
            >
              <span className="icon is-large" style={{ fontSize: 25 }}>
                ➤
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
