import React from "react";
import { Card, CardContent, Typography, List, ListItem, Link } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const YogaMeditation = () => {
  const sessions = [
    { name: "Morning Yoga", link: "https://www.youtube.com/watch?v=abcd1234" },
    { name: "Mindfulness Meditation", link: "https://www.youtube.com/watch?v=efgh5678" },
    { name: "Stress Relief Yoga", link: "https://www.youtube.com/watch?v=ijkl9101" },
  ];

  return (
    <Card sx={{ backgroundColor: "#f5f3f4", flex: 1, minWidth: "300px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333333", fontWeight: "bold" }}>
          Yoga and Meditation
        </Typography>
        <List>
          {sessions.map((session, index) => (
            <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
              <PlayCircleOutlineIcon sx={{ marginRight: "10px", color: "#333333" }} />
              <Link href={session.link} target="_blank" rel="noopener" sx={{ textDecoration: "none", color: "#373737" }}>
                {session.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default YogaMeditation;
