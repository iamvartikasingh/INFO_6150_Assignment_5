import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, List, ListItem } from "@mui/material";

const DailyJournal = () => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState("");

  const addEntry = () => {
    if (entry) {
      setEntries([...entries, { text: entry, date: new Date().toLocaleString() }]);
      setEntry("");
    }
  };

  return (
    <Card sx={{ backgroundColor: "#f5f3f4", flex: 1, minWidth: "300px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333333" }}>
          Daily Journal
        </Typography>
        <List>
          {entries.map((item, index) => (
            <ListItem key={index} sx={{ backgroundColor: "#fdfdfd", marginBottom: "5px", flexDirection: "column" }}>
              <Typography variant="body2" sx={{ color: "#333333", marginBottom: "5px" }}>
                {item.date}
              </Typography>
              <Typography>{item.text}</Typography>
            </ListItem>
          ))}
        </List>
        <TextField
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your journal entry"
          multiline
          rows={3}
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <Button onClick={addEntry} variant="contained" sx={{ backgroundColor: "#333333", color: "#ffffff" }}>
          Add Entry
        </Button>
      </CardContent>
    </Card>
  );
};

export default DailyJournal;
