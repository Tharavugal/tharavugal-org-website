import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useAlert from '@/hooks/useAlert';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import EditIcon from '@mui/icons-material/Edit';

export default function ActionMenu({ row, url, Edit, actions = [], mutate }) {
  const [editOpen, setEditOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const showAlert = useAlert();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReport = () => {
    handleClose();
    showAlert('error', 'Please sign in to continue');
  };

  return (
    <>
      <IconButton aria-label="settings" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleReport}>
          <ReportIcon
            sx={{ mr: 1, color: (theme) => theme.palette.text.secondary }}
          />{' '}
          Report
        </MenuItem>
        <MenuItem onClick={handleReport}>
          <EditIcon
            sx={{ mr: 1, color: (theme) => theme.palette.text.secondary }}
          />{' '}
          Correct it
        </MenuItem>
      </Menu>
    </>
  );
}
