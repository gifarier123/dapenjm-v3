import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { createChatSession, sendMessageToGemini } from '../services/gemini';
import { Chat } from "@google/genai";

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo! Saya Asisten Virtual Dapen Jasa Marga. Ada yang bisa saya bantu terkait program pensiun?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session on Open
  useEffect(() => {
    if (isOpen && !chatSession) {
      const session = createChatSession();
      setChatSession(session);
    }
  }, [isOpen, chatSession]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || !chatSession) return;

    const userMessage = inputText;
    setInputText('');
    
    // Add User Message
    setMessages(prev => [...prev, { role: 'user', text: userMessage, timestamp: new Date() }]);
    setIsLoading(true);

    // Get AI Response
    const responseText = await sendMessageToGemini(chatSession, userMessage);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-corporate-800 to-corporate-900 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat Assistant"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Tanya Asisten Dapen
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-corporate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Sparkles className="w-5 h-5 text-accent-500" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Dapen Assistant</h3>
                <p className="text-xs text-corporate-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-corporate-900 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <p className={`text-[10px] mt-1 text-right opacity-70 ${msg.role === 'user' ? 'text-white' : 'text-gray-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none p-3 shadow-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-corporate-500 animate-spin" />
                  <span className="text-xs text-gray-500">Sedang mengetik...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Tulis pesan Anda..."
                className="w-full bg-gray-100 text-gray-800 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-corporate-500 resize-none h-12 max-h-24"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className={`absolute right-2 top-2 p-2 rounded-lg transition-colors ${
                  inputText.trim() && !isLoading 
                    ? 'bg-corporate-900 text-white hover:bg-corporate-800' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-gray-400">
                AI dapat membuat kesalahan. Mohon verifikasi info penting.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};