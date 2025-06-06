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
    <Typography variant="h6" fontWeight={600} gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {children}
    </Typography>
  </NeumorphicBox>
);

const Terms = () => {
  return (
    <Box
      minHeight="100vh"
      px={2}
      py={5}
      bgcolor="#d3d3d3"
      display="flex"
      justifyContent="center"
    >
      <Stack spacing={4} maxWidth="1000px">
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          color="text.primary"
          sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
        >
          Privacy Policy & Terms
        </Typography>

        <Section title="1. Introduction">
          At RoomSync, your privacy is our priority. This Privacy Policy
          outlines how we collect, use, and protect your information when you
          use our platform.
        </Section>

        <Section title="2. Data We Collect">
          We collect personal information such as your name, email, contact
          details, lifestyle preferences, and listing data to enhance your
          experience and ensure accurate matches.
        </Section>

        <Section title="3. How We Use Your Information">
          - To personalize your experience and match you with compatible
          roommates or listings. <br />
          - To facilitate real-time chat between users. <br />- To improve the
          platform, troubleshoot issues, and ensure security.
        </Section>

        <Section title="4. Sharing Your Information">
          We do not sell your personal information. We may share it:
          <ul>
            <li>With other users as needed for platform functionality</li>
            <li>
              With third-party service providers (e.g., for hosting, analytics)
            </li>
            <li>To comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="5. Security">
          We use encryption and secure token-based authentication (JWT) to
          protect your data and ensure privacy during communication.
        </Section>

        <Section title="6. Cookies">
          We may use cookies for session management and usage analytics. You can
          adjust your browser settings to disable them.
        </Section>

        <Section title="7. Your Rights">
          You may request access, updates, or deletion of your personal data at
          any time by contacting our support team.
        </Section>

        <Section title="8. Changes to This Policy">
          RoomSync may update this policy from time to time. We encourage you to
          review it periodically for any changes.
        </Section>

        <Section title="9. Contact Us">
          If you have any questions or concerns about this Privacy Policy,
          please reach out to us at <strong>support@roomsync.com</strong>.
        </Section>
      </Stack>
    </Box>
  );
};

export default Terms;
