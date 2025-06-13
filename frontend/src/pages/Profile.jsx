import React, { useEffect, useState } from "react";
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
  Skeleton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import useGetUserProfile from "../hooks/useGetUserProfile";
import useUpdateUserProfile from "../hooks/useUpdateProfile";

const NeumorphicBox = styled(Box)(() => ({
  boxShadow:
    "8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)",
  background: "#e0e5ec",
  borderRadius: "20px",
  padding: "1rem",
}));

const ProfileField = ({ label, value, loading }) => (
  <NeumorphicBox sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography variant="body2" color="text.secondary" fontWeight={500}>
      {label}:
    </Typography>
    {loading ? (
      <Skeleton variant="text" width={120} />
    ) : (
      <Typography
        variant="subtitle1"
        sx={{ textTransform: label === "Email" ? "none" : "capitalize" }}
      >
        {value?.toString() || "-"}
      </Typography>
    )}
  </NeumorphicBox>
);

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const { user } = useSelector((state) => state.auth);
  const { getUserProfile, loading } = useGetUserProfile();
  const { updateUserProfile, loading : updateUserLoading } = useUpdateUserProfile();
  const allowedUpdates = [
    "name",
    "age",
    "profession",
    "lifestyle",
    "interests",
    "smoking",
    "drinking",
    "pets",
    "diet",
    "contactInfo",
  ];
  

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getUserProfile(user._id);
      setUserData(profile);
    };
    fetchProfile();
  }, []);

  const handleOpenDialog = () => {
    setFormData(userData);
    setEditDialogOpen(true);
  };

  const handleCloseDialog = () => setEditDialogOpen(false);

  const handleSave = async () => {
    const updatedUser = await updateUserProfile(userData._id, formData);
    setUserData(updatedUser);
    setEditDialogOpen(false);
    setUserData(formData);
    // TODO: Call API to update userData info
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
              src={userData.profilePicture || ""}
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
                      setUserData({
                        ...userData,
                        profilePicture: reader.result,
                      });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </Box>
          </Box>

          {loading ? (
            <>
              <Skeleton variant="text" width={120} height={28} />
              <Skeleton variant="text" width={180} height={20} />
            </>
          ) : (
            <>
              <Typography variant="h5">{userData.name}</Typography>
              <Typography variant="body1" color="text.secondary">
                {userData.email}
              </Typography>
            </>
          )}
        </Stack>

        {/* Profile Fields */}
        <Box
          mt={4}
          display="grid"
          gap={2}
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
        >
          <ProfileField label="Role" value={userData.role} loading={loading} />
          <ProfileField
            label="Gender"
            value={userData.gender}
            loading={loading}
          />
          <ProfileField label="Age" value={userData.age} loading={loading} />
          <ProfileField
            label="Profession"
            value={userData.profession}
            loading={loading}
          />
          <ProfileField
            label="Lifestyle"
            value={userData.lifestyle}
            loading={loading}
          />
          <ProfileField label="Diet" value={userData.diet} loading={loading} />
          <ProfileField
            label="Hobbies"
            value={userData.hobbies}
            loading={loading}
          />
          <ProfileField
            label="Smoking"
            value={userData.smoking ? "Yes" : "No"}
            loading={loading}
          />
          <ProfileField
            label="Drinking"
            value={userData.drinking ? "Yes" : "No"}
            loading={loading}
          />
          <ProfileField
            label="Pets"
            value={userData.pets ? "Yes" : "No"}
            loading={loading}
          />
          {userData.role == "seeker" &&
          <ProfileField
            label="Interests"
            value={userData.interests?.join(", ")}
            loading={loading}
          />}
          <ProfileField
            label="Phone"
            value={userData.contactInfo?.phone}
            loading={loading}
          />
          <ProfileField
            label="Address"
            value={userData.contactInfo?.address}
            loading={loading}
          />
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
              "&:hover": { boxShadow: "none" },
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
            mt={2}
            display="grid"
            gap={2}
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
          >
            {allowedUpdates.map((field) => {
              const value = formData[field];

              if (
                typeof value === "object" &&
                value !== null &&
                !Array.isArray(value)
              ) {
                return Object.entries(value).map(([subKey, subValue]) => (
                  <TextField
                    key={`${field}.${subKey}`}
                    label={subKey.charAt(0).toUpperCase() + subKey.slice(1)}
                    value={subValue || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field]: {
                          ...formData[field],
                          [subKey]: e.target.value,
                        },
                      })
                    }
                    fullWidth
                  />
                ));
              }

              return (
                <TextField
                  key={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={value || ""}
                  onChange={handleChange(field)}
                  fullWidth
                />
              );
            })}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" loading={updateUserLoading}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
