'use client';

import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdSmartToy } from 'react-icons/md';

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I’m your AI assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { from: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { from: 'bot', text: data.reply }]);
    } catch (err) {
      console.error('Error calling API:', err);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Error: Could not get a response from the server.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923011100950"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20B358] transition-all"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Chatbot Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MdSmartToy size={28} />
        </button>

      </div>

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white border border-gray-300 rounded-xl shadow-2xl flex flex-col z-50">

          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-black text-white rounded-t-xl">
            <span className="font-bold text-lg">AI Assistant</span>

            <button
              onClick={() => setChatOpen(false)}
              className="font-bold text-xl hover:text-gray-300"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-gray-50">

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.from === 'user'
                    ? 'self-end bg-black text-white'
                    : 'self-start bg-white text-black shadow-sm border'
                } px-3 py-2 rounded-2xl max-w-[75%]`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="self-start bg-white text-black px-3 py-2 rounded-2xl max-w-[75%] animate-pulse border">
                Typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-200 relative bg-white">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              onClick={handleSend}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-colors"
            >
              <FiSend size={18} />
            </button>

          </div>

        </div>
      )}
    </>
  );
}