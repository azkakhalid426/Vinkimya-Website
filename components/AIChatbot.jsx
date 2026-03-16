'use client';

import { useState, useRef, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FiSend } from 'react-icons/fi';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! Welcome to Vinkimya. How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Suggested Questions
  const suggestions = [
    "What products do you offer?",
    "Do you sell olive oil?",
    "Where is your company located?",
    "Do you ship internationally?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { from: 'user', text }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: data.reply },
      ]);

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Sorry, something went wrong. Please try again.' },
      ]);
    }

    setLoading(false);
  };

  const handleSend = () => {
    const userMessage = input;
    setInput('');
    sendMessage(userMessage);
  };

  const handleSuggestion = (question) => {
    sendMessage(question);
  };

  return (
    <div>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-bold text-lg">Vinkimya Assistant</span>
            <button onClick={() => setIsOpen(false)}>
              <IoClose size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3">

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {suggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestion(q)}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.from === 'user'
                    ? 'self-end bg-green-100 text-green-900'
                    : 'self-start bg-gray-100 text-gray-800'
                } px-3 py-2 rounded-xl max-w-[75%]`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="self-start bg-gray-100 text-gray-800 px-3 py-2 rounded-xl animate-pulse">
                Typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about products, chemicals, or olive oil..."
              className="w-full px-4 py-2 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />

            <button
              onClick={handleSend}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-green-600 hover:bg-green-700 p-2 rounded-full"
            >
              <FiSend size={18} />
            </button>
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-teal-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaRobot size={26} />
      </button>
    </div>
  );
}