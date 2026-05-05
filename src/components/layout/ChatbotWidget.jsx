import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { useChatbotStore } from '../../store/chatbotStore';
import groq from '../../utils/groqClient';

const suggestedQuestions = [
  "Explain Newton's 3rd law",
  "What is photosynthesis?",
  "Difference between acid and base",
];

const TypingIndicator = () => (
  <div className="flex gap-1 items-center px-4 py-3">
    {[0, 1, 2].map(i => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
      />
    ))}
  </div>
);

const ChatbotWidget = () => {
  const { isOpen, toggleChat, messages, addMessage } = useChatbotStore();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (e, overrideMsg) => {
    if (e) e.preventDefault();
    const userMsg = overrideMsg || input;
    if (!userMsg.trim() || isLoading) return;

    addMessage({ role: 'user', content: userMsg });
    setInput('');
    setIsLoading(true);

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are an AI Tutor specialized only in Class 9 and 10 Science (Physics, Chemistry, Biology). You MUST only answer questions related to these specific NCERT subjects. If the student asks about anything else (Math, English, history, personal advice, general knowledge, sports, etc.), politely decline and remind them that you are focused on Class 9-10 Science subjects only. Keep answers concise and student-friendly.'
          },
          ...messages.map(m => ({ role: m.role, content: m.content })),
          { role: 'user', content: userMsg }
        ],
        model: 'llama-3.3-70b-versatile'
      });

      const reply = chatCompletion.choices[0]?.message?.content || 'Error generating response';
      addMessage({ role: 'assistant', content: reply });
    } catch (err) {
      addMessage({ role: 'assistant', content: 'Unable to connect. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 left-0 md:left-auto md:bottom-6 md:right-6 z-50">

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0.2 }}
            className="w-full md:w-[400px] h-[100vh] md:h-[580px] bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 md:rounded-3xl flex flex-col shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden"
          >
            {/* Header */}
            <div className="relative px-5 py-4 flex justify-between items-center bg-gradient-to-r from-[#00A8E8] to-[#6366f1]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">AI Science Tutor</h3>
                  <p className="text-[10px] text-white/60 font-medium">Class 9-10 • PCB Only</p>
                </div>
              </div>
              <button onClick={toggleChat} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-gray-50/50 dark:bg-gray-950">

              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Ask me anything about Science</p>
                  <p className="text-xs text-gray-400 mb-6">Physics, Chemistry & Biology • Class 9-10</p>
                  <div className="space-y-2 w-full max-w-[280px]">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(null, q)}
                        className="w-full text-left px-4 py-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 hover:border-[#00A8E8] hover:text-[#00A8E8] transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#00A8E8] to-[#6366f1] text-white rounded-br-md'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-800 rounded-bl-md'
                  }`}>
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 mr-2">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl rounded-bl-md border border-gray-100 dark:border-gray-800">
                    <TypingIndicator />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a Science doubt..."
                  className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#00A8E8]/30 focus:border-[#00A8E8] transition-all text-gray-900 dark:text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-3 bg-gradient-to-r from-[#00A8E8] to-[#6366f1] text-white rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-40"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="absolute bottom-6 right-6 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8] to-[#6366f1] rounded-full animate-pulse-ring opacity-30" />
          <div className="relative w-14 h-14 bg-gradient-to-r from-[#00A8E8] to-[#6366f1] text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all">
            <MessageCircle className="w-6 h-6" />
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;