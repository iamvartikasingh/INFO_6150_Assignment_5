import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button, ButtonGroup } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ActivityTracker = () => {
  const [timeRange, setTimeRange] = useState("daily");

  const getData = () => {
    switch (timeRange) {
      case "weekly":
        return {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            { label: "Mood", data: [7, 6, 8, 7], borderColor: "#333333", fill: false },
            { label: "Sleep (Hours)", data: [7.5, 8, 7, 6.5], borderColor: "#373737", fill: false },
          ],
        };
      case "monthly":
        return {
          labels: ["Jan", "Feb", "Mar", "Apr"],
          datasets: [
            { label: "Mood", data: [7, 6.5, 8, 7.5], borderColor: "#333333", fill: false },
            { label: "Sleep (Hours)", data: [7.5, 8, 7.2, 6.8], borderColor: "#373737", fill: false },
          ],
        };
      default:
        return {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            { label: "Mood", data: [6, 7, 8, 5, 9, 7, 8], borderColor: "#333333", fill: false },
            { label: "Sleep (Hours)", data: [7, 8, 6, 8, 9, 7, 6], borderColor: "#373737", fill: false },
          ],
        };
    }
  };

  return (
    <Card sx={{ backgroundColor: "#f5f3f4", flex: 1, minWidth: "300px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333333", fontWeight: "bold" }}>
          Activity Tracker
        </Typography>
        <ButtonGroup variant="outlined" sx={{ marginBottom: "20px" }}>
          <Button onClick={() => setTimeRange("daily")}>Daily</Button>
          <Button onClick={() => setTimeRange("weekly")}>Weekly</Button>
          <Button onClick={() => setTimeRange("monthly")}>Monthly</Button>
        </ButtonGroup>
        <Line data={getData()} />
      </CardContent>
    </Card>
  );
};

export default ActivityTracker;
