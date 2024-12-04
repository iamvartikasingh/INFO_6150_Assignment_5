import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, List, ListItem } from "@mui/material";

const MedicationReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [reminder, setReminder] = useState("");

  const addReminder = () => {
    if (reminder) {
      setReminders([...reminders, reminder]);
      setReminder("");
    }
  };

  return (
    <Card sx={{ backgroundColor: "#f5f3f4", flex: 1, minWidth: "300px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333333" }}>
          Medication Reminder
        </Typography>
        <List>
          {reminders.map((item, index) => (
            <ListItem key={index} sx={{ backgroundColor: "#fdfdfd", marginBottom: "5px" }}>
              {item}
            </ListItem>
          ))}
        </List>
        <TextField
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          placeholder="Add a new reminder"
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <Button onClick={addReminder} variant="contained" sx={{ backgroundColor: "#333333", color: "#ffffff" }}>
          Add Reminder
        </Button>
      </CardContent>
    </Card>
  );
};

export default MedicationReminder;
