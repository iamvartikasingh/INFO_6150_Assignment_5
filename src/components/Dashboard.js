import React from "react";
import { Box, Typography } from "@mui/material";
import ActivityTracker from "./ActivityTracker";
import YogaMeditation from "./YogaMeditation";
import AppointmentScheduler from "./AppointmentScheduler";
import ChatWithTherapist from "./ChatWithTherapist.js";
import MedicationReminder from "./MedicationReminder";
import ProgressDashboard from "./ProgressDashboard";
import DailyJournal from "./DailyJournal";
import EducationalResources from "./EducationalResources";

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#fefefe", minHeight: "100vh", padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", color: "#333333", fontWeight: "bold" }}>
        Patient Dashboard
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <ActivityTracker />
        <YogaMeditation />
        <AppointmentScheduler />
        <ChatWithTherapist />
        <MedicationReminder />
        <ProgressDashboard />
        <DailyJournal />
        <EducationalResources />
      </Box>
    </Box>
  );
};

export default Dashboard;
