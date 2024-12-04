import React, { useState } from "react";
import { Card, CardContent, Typography, Button, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

const AppointmentScheduler = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleSchedule = () => {
    if (date && time) {
      alert(`Appointment scheduled for ${date.toLocaleDateString()} at ${time.toLocaleTimeString()}`);
    } else {
      alert("Please select both a date and time.");
    }
  };

  return (
    <Card sx={{ backgroundColor: "#f5f3f4", flex: 1, minWidth: "300px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333333" }}>
          Appointment Scheduler
        </Typography>
        <DatePicker
          label="Pick a Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth sx={{ marginBottom: "20px" }} />}
        />
        <TimePicker
          label="Pick a Time"
          value={time}
          onChange={(newValue) => setTime(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth sx={{ marginBottom: "20px" }} />}
        />
        <Button
          variant="contained"
          onClick={handleSchedule}
          sx={{ backgroundColor: "#333333", color: "#ffffff" }}
        >
          Schedule Appointment
        </Button>
      </CardContent>
    </Card>
  );
};

export default AppointmentScheduler;
