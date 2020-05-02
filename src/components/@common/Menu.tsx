import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ExhibitionsIcon from '@material-ui/icons/SettingsInputAntenna';
import AdminsIcon from '@material-ui/icons/AssignmentInd';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', link: '/', icon: <HomeIcon /> },
  { label: 'Exhibitions', link: '/exhibitions', icon: <ExhibitionsIcon /> },
  { label: 'Admins', link: '/admins', icon: <AdminsIcon /> },
];

const Menu: FC<IProps> = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={handleClose}
          onKeyDown={handleClose}
        >
          <List>
            {NAV_ITEMS.map(({ label, link, icon }) => (
              <Link to={link} key={label}>
                <ListItem className={classes.button} color="secondary" key={label} button>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    height: '100%',
    backgroundColor: theme.palette.secondary.dark,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    color: theme.palette.common.white,
  }
}));

export default Menu;
