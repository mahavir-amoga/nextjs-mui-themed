import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sidebardata } from "./sidebardata";

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false); // Local state for each item to control its open/close state
  const hasChildren = Boolean(item.children && item.children.length > 0);

  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen((prev) => !prev); // Toggle the open/close state
    }
  };

  return (
    <React.Fragment key={item.uuid}>
      <ListItem
        disablePadding
        sx={{
          "& .MuiSvgIcon-root": {
            color: "#BBDCFE",
            fontSize: "20px",
          },
          px: 1,
          "&:hover": {
            "& .MuiListItemButton-root": {
              background: "#345C7C",
            },
          },
        }}
      >
        <ListItemButton
          onClick={handleToggle}
          sx={{ gap: 1, borderRadius: "4px", padding: "4px 8px" }}
        >
          {item?.icon?.svg ? (
            <Typography
              sx={{
                height: "30px",
                width: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Typography>
          ) : (
            <Box sx={{ width: 30 }} />
          )}
          <ListItemText primary={item.display_name} />
          {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}{" "}
          {/* Toggle the icon based on isOpen */}
        </ListItemButton>
      </ListItem>
      {hasChildren && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" sx={{ p: 0, pl: 4 }}>
            {item.children.map((child) => (
              <SidebarItem key={child.uuid} item={child} />
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );
};

const SidebarSection = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
      <List sx={{ width: 240 }}>
        {data.map((item) => (
          <SidebarItem key={item.uuid} item={item} />
        ))}
      </List>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          background: "#12344D",
          color: "#BBDCFE",
        }}
      >
        {/* Upper Section - Scrollable */}
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <SidebarSection data={sidebardata} />
        </Box>

        <Divider />

        {/* Lower Section - Fixed at Bottom */}
        <Box sx={{ borderTop: "1px solid #ddd" }}>
          <SidebarSection data={sidebardata.slice(3, 6)} />{" "}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
