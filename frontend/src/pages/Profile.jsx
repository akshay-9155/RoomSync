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
  Select,
  MenuItem,
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
  const [newInterest, setNewInterest] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { getUserProfile, loading } = useGetUserProfile();
  const { updateUserProfile, loading : updateUserLoading } = useUpdateUserProfile();

  const isSeeker = user?.role === "seeker";

  const allowedUpdates = isSeeker
    ? [
        "name",
        "age",
        "profession",
        "lifestyle",
        "hobbies",
        "contactInfo",
        "interests",
        "smoking",
        "drinking",
        "pets",
        "diet",
      ]
    : [
        "name",
        "age",
        "profession",
        "contactInfo",
        "smoking",
        "drinking",
        "pets",
        "diet",
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
          <ProfileField label="Diet" value={userData.diet} loading={loading} />
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

          {isSeeker && (
            <>
              <ProfileField
                label="Lifestyle"
                value={userData.lifestyle}
                loading={loading}
              />
              <ProfileField
                label="Hobbies"
                value={userData.hobbies}
                loading={loading}
              />
              <ProfileField
                label="Interests"
                value={userData.interests?.join(", ")}
                loading={loading}
              />
            </>
          )}
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

              if (field === "contactInfo") {
                return Object.entries(value || {}).map(([subKey, subValue]) => {
                  const isAddress = subKey === "address";
                  return (
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
                      sx={subKey === "address" ? { gridColumn: "1 / -1" } : {}}
                    />
                  );
                });
              }
              

              // Dropdown for boolean fields
              if (["smoking", "drinking", "pets"].includes(field)) {
                return (
                  <Box key={field}>
                    <Typography fontSize={13} fontWeight={500}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </Typography>
                    <Select
                      value={value ? "Yes" : "No"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field]: e.target.value === "Yes",
                        })
                      }
                      fullWidth
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Box>
                );
              }

              // Dropdown for diet
              if (field === "diet") {
                return (
                  <Box key={field}>
                    <Typography fontSize={13} fontWeight={500}>
                      Diet
                    </Typography>
                    <Select
                      value={value || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, diet: e.target.value })
                      }
                      fullWidth
                    >
                      <MenuItem value="vegetarian">Vegetarian</MenuItem>
                      <MenuItem value="non-vegetarian">Non-Vegetarian</MenuItem>
                      <MenuItem value="eggetarian">Eggetarian</MenuItem>
                    </Select>
                  </Box>
                );
              }

              if (field === "interests") {
                return (
                  <Box
                    key={field}
                    sx={{
                      gridColumn: "1 / -1",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography fontSize={13} fontWeight={500}>
                      Interests
                    </Typography>

                    {/* Input with Add Button */}
                    <Box display="flex" gap={1}>
                      <TextField
                        label="Add Interest"
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        fullWidth
                      />
                      <Button
                        variant="contained"
                        onClick={() => {
                          if (newInterest.trim()) {
                            setFormData((prev) => ({
                              ...prev,
                              interests: [
                                ...(prev.interests || []),
                                newInterest.trim(),
                              ],
                            }));
                            setNewInterest("");
                          }
                        }}
                      >
                        +
                      </Button>
                    </Box>

                    {/* Show Current Interests */}
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {(formData.interests || []).map((interest, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            bgcolor: "#f0f0f0",
                            borderRadius: "999px",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.9rem",
                            gap: 0.5,
                          }}
                        >
                          {interest}
                          <Button
                            size="small"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                interests: prev.interests.filter(
                                  (_, i) => i !== idx
                                ),
                              }))
                            }
                            sx={{ minWidth: "auto", p: 0, ml: 0.5 }}
                          >
                            ❌
                          </Button>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                );
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
          <Button
            onClick={handleSave}
            variant="contained"
            loading={updateUserLoading}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
