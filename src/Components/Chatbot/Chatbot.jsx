import React, { useState, useRef, useEffect } from "react";
import { Card, Input, Button, List, Typography, Space } from "antd";
import {
  SendOutlined,
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const chatEndRef = useRef(null);

  const portfolioContext = `
Nama: Zulfikar Ahmad Komari
Role: Full Stack Developer
Skills: React, Next.js, Laravel, Node.js, Python, AI/ML
Projects: ERP Custom, Hospital Dashboard, Color Recognition AI
Education: Bachelor of Informatics, ITK
Certifications: Dicoding, Huawei AI
Skripsi: Facial Emotion Recognition
Portfolio Website: Menampilkan profil, skill, proyek, pengalaman, pendidikan, dan sertifikasi
`;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Kita biarkan AI bisa jawab di luar portfolio juga
      const response = await fetch(
        "https://api.lunos.tech/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_LUNOS_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4.1-mini",
            messages: [
              {
                role: "system",
                content: `
You are an AI assistant for the portfolio of Zulfikar Ahmad Komari. 
Use the following info to answer questions concisely, friendly, and accurately:

${portfolioContext}

If the user asks a question that is not related to Zulfikar's portfolio, answer based on your general knowledge in a helpful and friendly way.

Always answer in the same language as the user.
            `,
              },
              { role: "user", content: input.trim() },
            ],
          }),
        }
      );

      const data = await response.json();
      const aiMessage = {
        role: "assistant",
        content:
          data?.choices?.[0]?.message?.content ||
          "Hmm... I'm not sure how to respond to that!",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Lunos API Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Oops! Connection to AI service failed.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  const toggleMinimize = () => {
    setMinimized((prev) => !prev);
  };

  return (
    <Card
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        width: minimized ? 60 : 300,
        height: minimized ? 60 : "60vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        borderRadius: 12,
        zIndex: 1000,
        transition: "width 0.3s, height 0.3s",
      }}
      bodyStyle={{
        padding: minimized ? 0 : "12px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
      }}
    >
      {/* Header / Minimize button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          type="text"
          icon={minimized ? <PlusOutlined /> : <MinusOutlined />}
          onClick={toggleMinimize}
        />
      </div>

      {!minimized && (
        <>
          {/* Chat messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginBottom: 8,
            }}
          >
            <List
              dataSource={messages}
              renderItem={(msg) => (
                <List.Item
                  style={{
                    justifyContent:
                      msg.role === "user" ? "flex-end" : "flex-start",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <Card
                    size="small"
                    style={{
                      backgroundColor:
                        msg.role === "user" ? "#1677ff" : "#f5f5f5",
                      color: msg.role === "user" ? "white" : "black",
                      maxWidth: "80%",
                      borderRadius: 8,
                      wordBreak: "break-word",
                    }}
                  >
                    <Text>{msg.content}</Text>
                  </Card>
                </List.Item>
              )}
            />
            <div ref={chatEndRef} />
          </div>

          {/* Input & buttons */}
          <Space style={{ display: "flex" }} size="small">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my portfolio..."
              onPressEnter={handleSend}
              disabled={loading}
              style={{ flex: 1 }}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={handleSend}
              loading={loading}
            />
            <Button
              type="default"
              icon={<DeleteOutlined />}
              onClick={handleClear}
            />
          </Space>
        </>
      )}
    </Card>
  );
};

export default Chatbot;
