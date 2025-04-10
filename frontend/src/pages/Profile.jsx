import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

const NeumorphicBox = styled(Box)(() => ({
  boxShadow:
    "8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)",
  background: "#e0e5ec",
  borderRadius: "20px",
  padding: "1rem",
}));

const ProfileField = ({ label, value }) => (
  <NeumorphicBox
    sx={{ display: "flex", alignItems: "center", gap: 1 }}
  >
    <Typography variant="body2" color="text.secondary" fontWeight={500}>
      {label}:
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{ textTransform: label === "Email" ? "none" : "capitalize" }}
    >
      {value?.toString()}
    </Typography>
  </NeumorphicBox>
);

const Profile = () => {
  const [user, setUser] = useState({
    avatar: "",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123 456 7890",
    gender: "male",
    age: 25,
    profession: "Engineer",
    lifestyle: "Night Owl",
    diet: "non-vegetarian",
    hobbies: "Reading, Gaming",
    address: "123 Main Street, City",
  });


  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleOpenDialog = () => {
    setFormData(user);
    setEditDialogOpen(true);
  };

  const handleCloseDialog = () => setEditDialogOpen(false);

  const handleSave = () => {
    setUser(formData);
    setEditDialogOpen(false);
    // TODO: Call API to update user info
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      px={2}
      py={4}
      bgcolor="#d3d3d3"
    >
      <NeumorphicBox sx={{ width: "100%", maxWidth: 700 }}>
        <Stack spacing={2} alignItems="center">
          <Box position="relative" display="inline-block">
            <Avatar
              src={user.avatar || ""}
              alt="Profile Picture"
              sx={{ width: 100, height: 100 }}
            />
            <Box
              component="label"
              htmlFor="avatar-upload"
              position="absolute"
              bottom={0}
              right={0}
              bgcolor="#e0e5ec"
              borderRadius="50%"
              p={0.5}
            >
              <EditIcon fontSize="small" />
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setUser({ ...user, avatar: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </Box>
          </Box>

          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="body1" color="text.secondary">
            {user.email}
          </Typography>
        </Stack>

        {/* Profile Fields */}
        <Box
          mt={4}
          display="grid"
          gap={2}
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
        >
          {Object.entries(user).map(([key, value]) => (
            <ProfileField
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={value}
            />
          ))}
        </Box>

        <Box mt={4} display="flex" justifyContent="center">
          <Button
            onClick={handleOpenDialog}
            sx={{
              px: 4,
              py: 1,
              borderRadius: "12px",
              boxShadow:
                "4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.7)",
              background: "#e0e5ec",
              textTransform: "none",
              color: "gray",
              fontWeight: 600,
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Update Profile
          </Button>
        </Box>
      </NeumorphicBox>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent dividers>
          <Box
            mt={4}
            display="grid"
            gap={2}
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
          >
            {Object.entries(formData).map(([key, value]) => (
              <TextField
                key={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={value}
                onChange={handleChange(key)}
                fullWidth
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
