import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, List, ListItem } from "@mui/material";

const ChatWithTherapist = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <Card sx={{ backgroundColor: "#f5f3f4", flex: 1, minWidth: "300px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333333" }}>
          Chat with Therapist
        </Typography>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} sx={{ backgroundColor: "#fdfdfd", marginBottom: "5px" }}>
              {msg}
            </ListItem>
          ))}
        </List>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <Button onClick={sendMessage} variant="contained" sx={{ backgroundColor: "#333333", color: "#ffffff" }}>
          Send
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChatWithTherapist;
