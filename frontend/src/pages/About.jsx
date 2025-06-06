import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const NeumorphicBox = styled(Box)(() => ({
  background: "#e0e5ec",
  borderRadius: "20px",
  boxShadow:
    "8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)",
  padding: "2rem",
  maxWidth: "900px",
  margin: "auto",
}));

const Section = ({ title, children }) => (
  <NeumorphicBox sx={{ my: 3 }}>
    <Typography variant="h5" gutterBottom fontWeight={600}>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {children}
    </Typography>
  </NeumorphicBox>
);

const About = () => {
  return (
    <Box
      minHeight="100vh"
      px={2}
      py={5}
      bgcolor="#d3d3d3"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={4}>
        <Typography
          variant="h3"
          align="center"
          fontWeight="700"
          color="text.primary"
          sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
        >
          About RoomSync
        </Typography>

        <Section title="Our Mission">
          RoomSync is designed to simplify the journey of finding the ideal
          roommate or listing. Whether you're a student, working professional,
          or family — our platform helps you connect with people who share
          similar lifestyles, preferences, and expectations.
        </Section>

        <Section title="Who Can Use RoomSync?">
          <ul>
            <li>
              🏠 <strong>Room Seekers:</strong> Find rooms that match your needs
              with advanced filters and preference matching.
            </li>
            <li>
              📢 <strong>Room Owners:</strong> List your property and connect
              with reliable tenants quickly.
            </li>
            {/* <li>
              👮 <strong>Admins:</strong> Ensure platform safety and content
              moderation.
            </li> */}
          </ul>
        </Section>

        <Section title="Key Features">
          <ul>
            <li>🔍 Smart Filters: Location, price, preferences, lifestyle</li>
            <li>💬 Real-Time Chat: Talk before you walk in</li>
            <li>
              🎯 Match Compatibility: Based on mutual interests and habits
            </li>
            <li>🛡️ Secure Login: JWT-based authentication</li>
            {/* <li>⭐ Reviews and Ratings: Know your future roommate better</li> */}
          </ul>
        </Section>

        <Section title="Our Vision">
          We aim to foster safe, reliable, and compatible living experiences for
          everyone. With RoomSync, we don’t just connect rooms — we connect
          lives.
        </Section>
      </Stack>
    </Box>
  );
};

export default About;
