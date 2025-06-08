// src/components/ChatBox.jsx
import React, { useState } from 'react';
import { askGemini } from '../api/chatService';
import { FaCarSide, FaPaperPlane } from 'react-icons/fa';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const reply = await askGemini(input);
    setMessages(prev => [...prev, { from: 'gemini', text: reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition duration-200"
        aria-label="Open chat"
      >
        <FaCarSide size={22} />
      </button>

      {open && (
        <div className="mt-3 w-80 max-h-[80vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fade-in-up">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin scrollbar-thumb-indigo-300">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-3 py-2 rounded-md max-w-[75%] ${
                  msg.from === 'user'
                    ? 'bg-indigo-100 self-end text-right'
                    : 'bg-gray-100 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400">Gemini is typing...</div>}
          </div>

          {/* Input */}
          <div className="border-t border-gray-300 p-2 flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md"
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
