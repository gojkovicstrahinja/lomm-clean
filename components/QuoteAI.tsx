import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';
import { getCleaningAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const QuoteAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hallo! Ich bin der digitale Assistent von L.O.M.M Clean. Wie kann ich Ihnen helfen? Ich kann Fragen zur Reinigung beantworten oder Ihnen sagen, worauf es bei einem Angebot ankommt.',
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getCleaningAdvice(input);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center gap-2 group"
      >
        <Icon name="Bot" className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          Frage an den Experten
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div className="bg-primary p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <Icon name="Bot" className="w-5 h-5" />
          <h3 className="font-semibold">L.O.M.M Assistent</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded transition-colors">
          <Icon name="Close" className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
              msg.role === 'user' 
                ? 'bg-primary text-white rounded-br-none' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-slate-500 p-3 rounded-lg border border-slate-200 text-sm italic">
              Schreibt...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Fragen Sie uns etwas..."
          className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-primary text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          <Icon name="Send" className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};