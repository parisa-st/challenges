'use client';

import React, { useState } from 'react';
import { useGetUsersQuery } from '../features/users/usersApi';
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const UsersList = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  const [search, setSearch] = useState('');
  const router = useRouter();

  const filtered = users?.filter((user) =>
    `${user.name.firstname} ${user.name.lastname}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box sx={{ flex: 1, p: 2, overflowY: 'auto', maxHeight: '100vh' }}>
      <Typography variant="h6" gutterBottom>
        Users
      </Typography>
      <TextField
        label="Search users"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading && <CircularProgress />}
      <List>
        {filtered?.map((user) => (
          <ListItem
            key={user.id}
            component="button"
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <ListItemText
              primary={`${user.name.firstname} ${user.name.lastname}`}
              secondary={user.email}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UsersList;