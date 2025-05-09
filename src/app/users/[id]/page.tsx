'use client';

import { useParams } from 'next/navigation';
import { useGetUserByIdQuery } from '../../../features/users/usersApi';
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Divider,
} from '@mui/material';

const UserDetailsPage = () => {
  const { id } = useParams();
  const { data: user, isLoading, isError } = useGetUserByIdQuery(id as string);

  if (isLoading) return <CircularProgress />;
  if (isError || !user) return <Typography>Error loading user</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          {user.name.firstname} {user.name.lastname}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body1">
          <strong>Username:</strong> {user.username}
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> {user.phone}
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> {user.address.number} {user.address.street},{' '}
          {user.address.city} - {user.address.zipcode}
        </Typography>
      </Paper>
    </Box>
  );
};

export default UserDetailsPage;