import React from "react";
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EducationalResources = () => {
  const resources = [
    {
      category: "Mindfulness",
      links: [
        { name: "Mindfulness Basics", url: "https://www.mindfulness.org" },
        { name: "Mindful Breathing", url: "https://www.mindfulbreathing.com" },
      ],
    },
    {
      category: "Stress Management",
      links: [
        { name: "Coping with Stress", url: "https://www.stressrelief.org" },
        { name: "Stress Reduction Techniques", url: "https://www.stressreduction.com" },
      ],
    },
  ];

  return (
    <Card sx={{ backgroundColor: "#f5f3f4", flex: 1, minWidth: "300px" }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333333" }}>
          Educational Resources
        </Typography>
        {resources.map((resource, index) => (
          <Accordion key={index} sx={{ backgroundColor: "#fcfcfc" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: "#333333" }}>
              {resource.category}
            </AccordionSummary>
            <AccordionDetails>
              {resource.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  sx={{ display: "block", color: "#373737", marginBottom: "5px" }}
                >
                  {link.name}
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
};

export default EducationalResources;
