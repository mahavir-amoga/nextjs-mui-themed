"use client";

import { Menu as MenuIcon } from "@mui/icons-material";
import {
    Alert,
    AppBar,
    Avatar,
    Badge,
    Button,
    Card,
    Checkbox,
    Chip,
    CircularProgress,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid2,
    IconButton,
    Menu,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Slider,
    Snackbar,
    Switch,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";

const ComponentsPage = () => {
  return (
    <Grid2>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">MUI v6 Components Showcase</Typography>
        </Toolbar>
      </AppBar>

      {/* Grid2 to showcase various MUI components */}
      <Grid2 container spacing={4} style={{ marginTop: "20px" }}>
        {/* Button with Primary and Secondary Variants */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Button variant="contained" color="primary">
            Primary Contained Button
          </Button>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Button variant="contained" color="secondary">
            Secondary Contained Button
          </Button>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Button variant="outlined" color="primary">
            Primary Outlined Button
          </Button>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Button variant="outlined" color="secondary">
            Secondary Outlined Button
          </Button>
        </Grid2>

        {/* Typography */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Typography variant="h4">This is a Heading</Typography>
        </Grid2>

        {/* TextField */}
        <Grid2 item xs={12} sm={6} md={4}>
          <TextField size="medium" fullWidth placeholder="Test Textfield" />
        </Grid2>

        {/* Card */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Card>
            <Typography variant="h5" component="div">
              MUI Card
            </Typography>
          </Card>
        </Grid2>

        {/* Checkbox */}
        <Grid2 item xs={12} sm={6} md={4}>
          <FormControlLabel control={<Checkbox />} label="Checkbox" />
        </Grid2>

        {/* Radio Buttons */}
        <Grid2 item xs={12} sm={6} md={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Choose an option</FormLabel>
            <RadioGroup row defaultValue="a">
              <FormControlLabel
                value="a"
                control={<Radio />}
                label="Option A"
              />
              <FormControlLabel
                value="b"
                control={<Radio />}
                label="Option B"
              />
            </RadioGroup>
          </FormControl>
        </Grid2>

        {/* Switch */}
        <Grid2 item xs={12} sm={6} md={4}>
          <FormControlLabel control={<Switch />} label="Switch" />
        </Grid2>

        {/* Slider */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Slider defaultValue={30} aria-label="Slider" />
        </Grid2>

        {/* Menu */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Menu anchorEl={null} open={false}>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Menu>
        </Grid2>

        {/* Alert */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Alert severity="info">This is an info alert!</Alert>
        </Grid2>

        {/* Circular Progress */}
        <Grid2 item xs={12} sm={6} md={4}>
          <CircularProgress />
        </Grid2>

        {/* Snackbar */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Snackbar open={true} message="This is a Snackbar!" />
        </Grid2>

        {/* Badge with Primary and Secondary Variants */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Badge badgeContent={4} color="primary">
            <Avatar>U</Avatar>
          </Badge>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Badge badgeContent={4} color="secondary">
            <Avatar>U</Avatar>
          </Badge>
        </Grid2>

        {/* Avatar */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Grid2>

        {/* Chip with Primary and Secondary Variants */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Chip label="Primary Chip" color="primary" clickable />
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Chip label="Secondary Chip" color="secondary" clickable />
        </Grid2>

        {/* Tooltip */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Tooltip title="Delete">
            <Button variant="outlined" color="primary">
              Delete
            </Button>
          </Tooltip>
        </Grid2>

        {/* Paper */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Paper elevation={3}>
            <Typography variant="h6" component="div">
              This is a Paper component
            </Typography>
          </Paper>
        </Grid2>

        {/* Divider */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Divider />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ComponentsPage;
