import React from "react";
import { Card, CardContent, Typography, LinearProgress } from "@mui/material";

const ProgressDashboard = () => {
  return (
    <Card sx={{ backgroundColor: "#f5f3f4", flex: 1, minWidth: "300px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333333" }}>
          Progress Dashboard
        </Typography>
        <Typography>Therapy Sessions: 3/10</Typography>
        <LinearProgress variant="determinate" value={30} sx={{ marginBottom: "10px", backgroundColor: "#fcfcfc" }} />
        <Typography>Mindfulness Goals: 5/7</Typography>
        <LinearProgress variant="determinate" value={71} sx={{ backgroundColor: "#fcfcfc" }} />
      </CardContent>
    </Card>
  );
};

export default ProgressDashboard;
