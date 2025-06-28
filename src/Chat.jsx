import React, { useState } from 'react';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [geminiHistory, setGeminiHistory] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessageText = input;
        const newUserMessage = { role: 'user', text: userMessageText, timestamp: Date.now() };

        setMessages(prev => [...prev, newUserMessage]);
        setInput('');
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3001/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessageText,
                    history: geminiHistory
                }),
            });

            if (!response.ok) throw new Error('Failed to fetch response');

            const data = await response.json();
            const aiResponseText = data.response;
            const aiResponse = { role: 'ai', text: aiResponseText, timestamp: Date.now() };

            setMessages(prev => [...prev, aiResponse]);
            setGeminiHistory(prev => [
                ...prev,
                { role: 'user', parts: [{ text: userMessageText }] },
                { role: 'model', parts: [{ text: aiResponseText }] },
            ]);
        } catch (error) {
            setError(error.message);
            setMessages(prev => prev.slice(0, -1)); // Remove last user message
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    backgroundColor: '#0ff',
                    color: '#111',
                    border: 'none',
                    borderRadius: '50%',
                    width: '56px',
                    height: '56px',
                    fontSize: '20px',
                    boxShadow: '0 0 15px #0ff',
                    cursor: 'pointer',
                    zIndex: 9999
                }}
            >
                💬
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '90px',
                    right: '24px',
                    width: '350px',
                    maxHeight: '480px',
                    backgroundColor: 'rgba(20,20,30,0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    boxShadow: '0 0 20px rgba(0,255,255,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 9998,
                    overflow: 'hidden',
                    fontFamily: 'Inter, sans-serif',
                }}>
                    {/* Header */}
                    <div style={{
                        backgroundColor: '#0ff',
                        color: '#111',
                        padding: '10px 16px',
                        fontWeight: '600',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <span>AI Chat</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#111',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}
                        >×</button>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flexGrow: 1,
                        padding: '10px',
                        overflowY: 'auto',
                        color: '#eee',
                    }}>
                        {messages.length === 0 && <p style={{ textAlign: 'center', opacity: 0.5 }}>Say something to begin 🤖</p>}
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                textAlign: msg.role === 'user' ? 'right' : 'left',
                                marginBottom: '10px'
                            }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '10px 15px',
                                    borderRadius: '12px',
                                    maxWidth: '80%',
                                    backgroundColor: msg.role === 'user' ? '#111' : '#222',
                                    border: msg.role === 'user' ? '1px solid #0ff' : '1px solid #555',
                                    color: '#0ff',
                                    fontSize: '14px',
                                }}>
                                    <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
                                </div>
                            </div>
                        ))}
                        {loading && <p style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.6 }}>Thinking...</p>}
                        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                    </div>

                    {/* Input */}
                    <div style={{ display: 'flex', padding: '10px', backgroundColor: '#111' }}>
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyPress={e => { if (e.key === 'Enter') sendMessage(); }}
                            placeholder="Type a message..."
                            style={{
                                flexGrow: 1,
                                padding: '8px',
                                borderRadius: '8px',
                                border: '1px solid #333',
                                backgroundColor: '#222',
                                color: '#0ff',
                                outline: 'none',
                                fontSize: '14px'
                            }}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading || input.trim() === ''}
                            style={{
                                marginLeft: '8px',
                                padding: '8px 12px',
                                backgroundColor: '#0ff',
                                color: '#111',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                opacity: loading ? 0.5 : 1
                            }}
                        >Send</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Chat;
