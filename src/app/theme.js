"use client";
// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C5CC5",
    },
    secondary: {
      main: "#EDF1F9",
    },
    background: {
      default: "#EDF1F9",
      paper: "#FFFFFF",
      bgcolor: {
        bg50: "#FFFFFF",
        bg100: "#F9F9F9",
        bg200: "#F7F9FC",
        bg300: "#EDF1F9",
        bg400: "#E0EAFF",
        bg500: "#D2E1FF",
        bg600: "#DDE4F4",
        bg700: "#345C7C",
        bg800: "#12344D",
      },
    },
    text: {
      primary: "#333333",
      secondary: "#2C5CC5",
      tertiary: "#666666",
    },
    typography: {
      default: "#333333",
      primary: {
        main100: "#2C5CC5",
        main200: "#5C709B",
        main300: "#2A4277",
      },
      secondary: {
        main100: "#999999",
        main200: "#666666",
        main300: "#333333",
        main400: "#292929",
      },
      tertiary: {
        main100: "#8290A3",
        main200: "#576C7D",
        main300: "#384551",
        main400: "#28364E",
      },
    },
    border: {
      default: "#E2E8F0",
      customBorder: {
        border50: "#E2E8F0",
        border100: "#D1E0F3",
        border200: "#233B55",
        border300: "#2C5CC5",
        border400: "#C6D1DF",
      },
    },
    hover: {
      default: "#F7F9FC",
      customHover: {
        hover50: "#F7F9FC",
        hover100: "#F5F7F9",
        hover200: "#EBEFF3",
        hover300: "#ECF2FF",
        hover400: "#E3EAF9",
        hover500: "#345C7C",
        hover600: "#D3d7DB",
      },
    },
    icon: {
      default: "#384551",
      primary: {
        main100: "#BBDCFE",
        main200: "#2C5CC5",
        main300: "#2A4277",
      },
      secondary: {
        main100: "#C4C4C4",
        main200: "#666666",
        main300: "#384551",
        main400: "#152B3F",
      },
      tertiary: {
        main100: "#CFD7DF",
        main200: "#8290A3",
        main300: "#12344D",
      },
    },
    gradiant: {
      linear: {
        linear1:
          "linear-gradient(97.47deg, rgba(224, 234, 255, 0.5) -5.59%, rgba(255, 255, 255, 0.5) 105.7%)",
      },
    },
  },

  //zomoto
  // palette: {
  //   primary: {
  //     main: "#D10024", // Zomato's primary red color
  //   },
  //   secondary: {
  //     main: "#F5F5F5", // Soft light gray
  //   },
  //   background: {
  //     default: "#F9F9F9", // Light grayish background
  //     paper: "#FFFFFF", // White paper background
  //     bgcolor: {
  //       bg50: "#FFFFFF", // White background
  //       bg100: "#F9F9F9", // Light background
  //       bg200: "#F5F5F5", // Slightly darker gray
  //       bg300: "#F0F0F0", // Soft gray
  //       bg400: "#E6E6E6", // Lighter gray
  //       bg500: "#E0E0E0", // Subtle light gray
  //       bg600: "#C7C7C7", // Darker gray
  //       bg700: "#8A8A8A", // Medium gray
  //       bg800: "#3C3C3C", // Dark gray (close to black)
  //     },
  //   },
  //   text: {
  //     primary: "#333333", // Dark text color
  //     secondary: "#D10024", // Primary red for secondary text
  //     tertiary: "#8A8A8A", // Light gray text
  //   },
  //   typography: {
  //     default: "#333333", // Default text color
  //     primary: {
  //       main100: "#D10024", // Zomato red
  //       main200: "#B31521", // Slightly darker red
  //       main300: "#800015", // Dark red
  //     },
  //     secondary: {
  //       main100: "#8A8A8A", // Light gray
  //       main200: "#666666", // Medium gray
  //       main300: "#333333", // Darker gray
  //       main400: "#292929", // Dark gray
  //     },
  //     tertiary: {
  //       main100: "#C7C7C7", // Light gray
  //       main200: "#A0A0A0", // Slightly darker gray
  //       main300: "#555555", // Medium gray
  //       main400: "#3C3C3C", // Dark gray
  //     },
  //   },
  //   border: {
  //     default: "#E2E8F0", // Light gray for default borders
  //     customBorder: {
  //       border50: "#F5F5F5", // Very light gray for subtle borders
  //       border100: "#D1D1D1", // Light gray for borders
  //       border200: "#B31521", // Dark red for important borders
  //       border300: "#D10024", // Primary red for highlighted borders
  //       border400: "#C6C6C6", // Medium gray for borders
  //     },
  //   },
  //   hover: {
  //     default: "#F7F9FC", // Light background on hover
  //     customHover: {
  //       hover50: "#F9F9F9", // Slightly darker hover color
  //       hover100: "#F5F5F5", // Soft gray hover
  //       hover200: "#EAEAEA", // Lighter gray hover
  //       hover300: "#ECF2FF", // Subtle light blue
  //       hover400: "#D1D1D1", // Gray hover effect
  //       hover500: "#8A8A8A", // Darker hover effect
  //       hover600: "#C7C7C7", // Soft dark gray hover
  //     },
  //   },
  //   icon: {
  //     default: "#333333", // Dark icons
  //     primary: {
  //       main100: "#D10024", // Red for primary icons
  //       main200: "#B31521", // Slightly darker red
  //       main300: "#800015", // Dark red
  //     },
  //     secondary: {
  //       main100: "#C4C4C4", // Light gray for secondary icons
  //       main200: "#666666", // Medium gray for secondary icons
  //       main300: "#333333", // Dark for active secondary icons
  //       main400: "#292929", // Darker gray
  //     },
  //     tertiary: {
  //       main100: "#B2B2B2", // Light gray for tertiary icons
  //       main200: "#A0A0A0", // Slightly darker gray
  //       main300: "#3C3C3C", // Dark gray for tertiary icons
  //     },
  //   },
  //   gradient: {
  //     linear: {
  //       linear1:
  //         "linear-gradient(97.47deg, rgba(224, 234, 255, 0.5) -5.59%, rgba(255, 255, 255, 0.5) 105.7%)", // Soft gradient for UI elements
  //     },
  //   },
  // },

  //MacD
  // palette: {
  //   primary: {
  //     main: "#F7B800", // McDonald's iconic yellow
  //   },
  //   secondary: {
  //     main: "#DA291C", // McDonald's red
  //   },
  //   background: {
  //     default: "#F5F5F5", // Light gray background
  //     paper: "#FFFFFF", // White paper background for cards, etc.
  //     bgcolor: {
  //       bg50: "#FFFFFF", // Lightest background color (white)
  //       bg100: "#F9F9F9", // Very light gray
  //       bg200: "#F2F2F2", // Slightly darker gray
  //       bg300: "#E1E1E1", // Medium light gray
  //       bg400: "#D3D3D3", // Medium gray
  //       bg500: "#C1C1C1", // Darker gray
  //       bg600: "#B0B0B0", // Darker gray
  //       bg700: "#8D8D8D", // Even darker gray
  //       bg800: "#555555", // Dark background for contrast
  //     },
  //   },
  //   text: {
  //     primary: "#333333", // Main text color (dark gray)
  //     secondary: "#F7B800", // Secondary text color (yellow)
  //     tertiary: "#666666", // Lighter gray text
  //   },
  //   typography: {
  //     default: "#333333", // Default dark text color
  //     primary: {
  //       main100: "#DA291C", // Red color for primary text (McDonald's red)
  //       main200: "#9B1D10", // Slightly darker red
  //       main300: "#66130D", // Even darker red
  //     },
  //     secondary: {
  //       main100: "#999999", // Light gray text
  //       main200: "#666666", // Gray text for secondary
  //       main300: "#333333", // Darker gray for secondary
  //       main400: "#292929", // Very dark gray
  //     },
  //     tertiary: {
  //       main100: "#8290A3", // Slightly bluish gray
  //       main200: "#576C7D", // Blue-gray
  //       main300: "#384551", // Dark blue-gray
  //       main400: "#28364E", // Darker blue-gray
  //     },
  //   },
  //   border: {
  //     default: "#E2E8F0", // Default light border color
  //     customBorder: {
  //       border50: "#E2E8F0", // Light border for default
  //       border100: "#D1E0F3", // Light border for medium level
  //       border200: "#233B55", // Darker border color
  //       border300: "#DA291C", // Red border for McDonald's
  //       border400: "#C6D1DF", // Light blue-gray border
  //     },
  //   },
  //   hover: {
  //     default: "#F7F9FC", // Light hover color
  //     customHover: {
  //       hover50: "#F7F9FC", // Lighter hover
  //       hover100: "#F5F7F9", // Soft light hover
  //       hover200: "#EBEFF3", // Hover with more contrast
  //       hover300: "#ECF2FF", // Light blue hover
  //       hover400: "#E3EAF9", // Slightly darker hover
  //       hover500: "#8D8D8D", // Dark hover effect
  //     },
  //   },
  //   icon: {
  //     default: "#333333", // Default icon color (dark gray)
  //     primary: {
  //       main100: "#F7B800", // Yellow for icons (McDonald's yellow)
  //       main200: "#DA291C", // Red icon color (McDonald's red)
  //       main300: "#66130D", // Dark red icon color
  //     },
  //     secondary: {
  //       main100: "#C4C4C4", // Gray icon color
  //       main200: "#666666", // Gray icon for secondary
  //       main300: "#384551", // Dark icon color
  //       main400: "#152B3F", // Very dark icon color
  //     },
  //     tertiary: {
  //       main100: "#CFD7DF", // Light gray icons
  //       main200: "#8290A3", // Blue-gray icons
  //       main300: "#12344D", // Dark blue-gray icons
  //     },
  //   },
  //   gradient: {
  //     linear: {
  //       linear1:
  //         "linear-gradient(97.47deg, rgba(224, 234, 255, 0.5) -5.59%, rgba(255, 255, 255, 0.5) 105.7%)", // Gradient for soft background
  //     },
  //   },
  // },

  //NVDIA
  palette: {
    primary: {
      main: "#76B900", // NVIDIA Green
    },
    secondary: {
      main: "#111111", // Dark Grey for contrast
    },
    background: {
      default: "#111111", // Dark Background
      paper: "#1C1C1C", // Slightly lighter background for paper-like surfaces
      bgcolor: {
        bg50: "#1C1C1C", // Background for elements
        bg100: "#282828", // Lighter background for less prominent areas
        bg200: "#3C3C3C",
        bg300: "#4D4D4D",
        bg400: "#616161",
        bg500: "#7E7E7E",
        bg600: "#A0A0A0", // For elements in hover state
        bg700: "#D4D4D4",
        bg800: "#F2F2F2", // Lightest background color
      },
    },
    text: {
      primary: "#E5E5E5", // Light text color on dark backgrounds
      secondary: "#A9A9A9", // Lighter secondary text
      tertiary: "#7E7E7E", // Text for less important items
    },
    typography: {
      default: "#E5E5E5", // Default text color
      primary: {
        main100: "#76B900", // Bright NVIDIA Green
        main200: "#A1D300", // Lighter green variant
        main300: "#7D9E00", // Muted green variant
      },
      secondary: {
        main100: "#CCCCCC", // Light grey text
        main200: "#A9A9A9", // Secondary grey text
        main300: "#8A8A8A",
        main400: "#5C5C5C",
      },
      tertiary: {
        main100: "#B5B5B5", // Muted grey
        main200: "#8D8D8D",
        main300: "#626262",
        main400: "#3C3C3C", // Darker tertiary text color
      },
    },
    border: {
      default: "#3C3C3C", // Dark border for elements
      customBorder: {
        border50: "#444444", // Subtle borders
        border100: "#666666", // Slightly lighter borders
        border200: "#888888",
        border300: "#76B900", // Highlighted borders, NVIDIA Green
        border400: "#A1D300", // Light green borders for focus
      },
    },
    hover: {
      default: "#282828", // Dark background for hover states
      customHover: {
        hover50: "#383838", // Slightly lighter hover background
        hover100: "#484848",
        hover200: "#595959",
        hover300: "#6A6A6A",
        hover400: "#7B7B7B",
        hover500: "#8C8C8C", // Highlighted hover
      },
    },
    icon: {
      default: "#A9A9A9", // Light grey icon color
      primary: {
        main100: "#76B900", // Primary green icon
        main200: "#A1D300",
        main300: "#7D9E00",
      },
      secondary: {
        main100: "#CCCCCC", // Light grey for secondary icons
        main200: "#B5B5B5",
        main300: "#9E9E9E",
        main400: "#767676",
      },
      tertiary: {
        main100: "#8D8D8D", // Muted tertiary icons
        main200: "#626262",
        main300: "#484848",
      },
    },
    gradient: {
      linear: {
        linear1:
          "linear-gradient(90deg, rgba(118, 185, 0, 0.6) 0%, rgba(163, 211, 0, 0.6) 100%)", // Green gradient effect
      },
    },

    hover: {
      default: "#E7ECF3",
      customHover: {
        hover50: "#F1F5F9",
        hover100: "#D1D5DB",
        hover200: "#BCC6D0",
        hover300: "#A2B5D8",
        hover400: "#6B7280",
        hover500: "#374151",
        hover600: "#1E3A8A",
      },
    },
    icon: {
      default: "#333333",
      primary: {
        main100: "#1E3A8A",
        main200: "#375B9B",
        main300: "#234B8C",
      },
      secondary: {
        main100: "#9CA3AF",
        main200: "#6B7280",
        main300: "#333333",
        main400: "#1F2937",
      },
      tertiary: {
        main100: "#D1D5DB",
        main200: "#BCC6D0",
        main300: "#374151",
      },
    },
    gradient: {
      linear: {
        linear1:
          "linear-gradient(97.47deg, rgba(200, 220, 255, 0.5) -5.59%, rgba(255, 255, 255, 0.5) 105.7%)",
      },
    },
    vibrant: {
      yellow: "#FFC107", // Vibrant yellow for accent elements
      orange: "#FF5722", // Bright orange for warm highlights
      magenta: "#E91E63", // Magenta for emphasis
      blue: "#3F51B5", // Cool blue to complement the primary color
      green: "#4CAF50", // Balanced green for success indications
    },
  },

  // MAsterCard
  palette: {
    primary: {
      main: "#EB001B", // MasterCard Red
    },
    secondary: {
      main: "#F79C42", // MasterCard Yellow
    },
    background: {
      default: "#F7F7F7", // Light background color
      paper: "#FFFFFF", // White paper background
      bgcolor: {
        bg50: "#FFFFFF", // Light background
        bg100: "#F9F9F9", // Slightly darker light background
        bg200: "#F2F2F2", // Medium background shade
        bg300: "#E9E9E9", // Medium light shade
        bg400: "#D3D3D3", // Light gray background
        bg500: "#C0C0C0", // Light gray background
        bg600: "#A8A8A8", // Light gray background
        bg700: "#707070", // Darker gray background
        bg800: "#3E3E3E", // Dark background
      },
    },
    text: {
      primary: "#2D2D2D", // Dark gray for primary text
      secondary: "#EB001B", // MasterCard Red for secondary text
      tertiary: "#A3A3A3", // Lighter gray for tertiary text
    },
    typography: {
      default: "#2D2D2D", // Dark gray for general typography
      primary: {
        main100: "#EB001B", // MasterCard Red
        main200: "#F79C42", // MasterCard Yellow
        main300: "#2C2C2C", // Dark gray for primary text
      },
      secondary: {
        main100: "#A3A3A3", // Light gray for secondary text
        main200: "#707070", // Dark gray for secondary text
        main300: "#2D2D2D", // Dark gray for general secondary text
        main400: "#B0B0B0", // Lighter gray for other secondary text
      },
      tertiary: {
        main100: "#F5F5F5", // Light gray for tertiary text
        main200: "#CCCCCC", // Very light gray for tertiary text
        main300: "#B3B3B3", // Medium gray for tertiary text
        main400: "#999999", // Slightly darker gray for tertiary text
      },
    },
    border: {
      default: "#E0E0E0", // Light gray for borders
      customBorder: {
        border50: "#E0E0E0", // Light gray border
        border100: "#D0D0D0", // Medium gray border
        border200: "#C0C0C0", // Slightly darker gray border
        border300: "#EB001B", // MasterCard Red for custom borders
        border400: "#F79C42", // MasterCard Yellow for custom borders
      },
    },
    hover: {
      default: "#F0F0F0", // Light hover background
      customHover: {
        hover50: "#F0F0F0", // Light gray hover
        hover100: "#E6E6E6", // Medium light hover
        hover200: "#DCDCDC", // Medium gray hover
        hover300: "#F9F9F9", // Light hover for primary items
        hover400: "#F2F2F2", // Slightly darker hover
        hover500: "#B5B5B5", // Darker gray hover
      },
    },
    icon: {
      default: "#2D2D2D", // Dark gray for icons
      primary: {
        main100: "#EB001B", // MasterCard Red for primary icons
        main200: "#F79C42", // MasterCard Yellow for primary icons
        main300: "#2C2C2C", // Dark gray for primary icons
      },
      secondary: {
        main100: "#A3A3A3", // Light gray for secondary icons
        main200: "#707070", // Dark gray for secondary icons
        main300: "#2D2D2D", // Dark gray for general secondary icons
        main400: "#B0B0B0", // Lighter gray for other secondary icons
      },
      tertiary: {
        main100: "#F5F5F5", // Light gray for tertiary icons
        main200: "#CCCCCC", // Very light gray for tertiary icons
        main300: "#B3B3B3", // Medium gray for tertiary icons
      },
    },
    gradiant: {
      linear: {
        linear1:
          "linear-gradient(97.47deg, rgba(224, 234, 255, 0.5) -5.59%, rgba(255, 255, 255, 0.5) 105.7%)", // MasterCard Gradient (background effect)
      },
    },
  },

  customShadows: {
    default: {
      shadow1: "0px 2px 4px 0px #0000000D",
    },
  },
  typography: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    h1: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
    },
    h2: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "22px",
    },
    h4: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    },
    h5: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
    },
    h6: {
      fontSize: "11px",
      fontWeight: 600,
      lineHeight: "15px",
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    },
    subtitle2: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    body3: {
      fontSize: "11px",
      fontWeight: 400,
      lineHeight: "15px",
      display: "block",
    },
    bodyH3: {
      fontSize: "16px",
      fontWeight: 400,
      display: "block",
    },
  },
  customComponent: {
    colorIcon: {
      small: {
        width: "6px",
        height: "6px",
      },
      medium: {
        width: "8px",
        height: "8px",
      },
      large: {
        width: "10px",
        height: "10px",
      },
    },
    iconText: {
      small: {
        fontSize: "11px",
        lineHeight: "15px",
      },
      medium: {
        fontSize: "12px",
        lineHeight: "16px",
      },
      large: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    text: {
      small: {
        fontSize: "11px",
        lineHeight: "15px",
      },
      medium: {
        fontSize: "12px",
        lineHeight: "16px",
      },
      large: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    backgroundText: {
      small: {
        fontSize: "11px",
        lineHeight: "15px",
      },
      medium: {
        fontSize: "12px",
        lineHeight: "16px",
      },
      large: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    colorpicker: {
      small: {
        width: "15px",
        height: "15px",
      },
      medium: {
        width: "20px",
        height: "20px",
      },
    },
    svgRenderer: {
      small: {
        width: 14,
        height: 14,
      },
      medium: {
        width: 16,
        height: 16,
      },
      large: {
        width: 18,
        height: 18,
      },
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          boxShadow: "none",
        },
        startIcon: {
          fontSize: "16px",
        },
        endIcon: {
          fontSize: "16px",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main, // Uses primary main from your palette
            color: theme.palette.background.paper, // Uses background.paper for text color
            "&:hover": {
              backgroundColor: theme.palette.primary.dark, // Darker primary color on hover
              boxShadow: "none",
            },
            "&:disabled": {
              backgroundColor: theme.palette.primary.dark,
              opacity: 0.35,
              color: theme.palette.background.paper,
            },
          }),
        },

        {
          props: { variant: "outlined", color: "primary" },
          style: ({ theme }) => ({
            border: `0.8px ${theme.palette.primary.main} solid`, // Uses primary main for border
            color: theme.palette.primary.main,
            "&:hover": {
              border: `0.8px ${theme.palette.primary.main} solid`,
              backgroundColor: theme.palette.hover.hover100, // Lighter hover color
            },
            "&:disabled": {
              border: `0.8px ${theme.palette.primary.main} solid`,
              color: theme.palette.primary.main,
              opacity: 0.35,
              backgroundColor: theme.palette.background.paper,
            },
          }),
        },

        {
          props: { variant: "text", color: "primary" },
          style: ({ theme }) => ({
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.hover.hover100,
              color: theme.palette.primary.main,
            },
            "&:disabled": {
              color: theme.palette.primary.main,
              opacity: 0.35,
            },
          }),
        },

        // Sizes
        {
          props: { size: "small" },
          style: {
            fontSize: "12px",
            padding: "6px 12px",
            lineHeight: "16px",
          },
        },
        {
          props: { size: "medium" },
          style: {
            fontSize: "12px",
            padding: "8px 12px",
            lineHeight: "16px",
          },
        },
        {
          props: { size: "large" },
          style: {
            fontSize: "12px",
            padding: "10px 12px",
            lineHeight: "16px",
          },
        },

        {
          props: { variant: "whiteBgButtonVariant" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.background.bgcolor.bg50, // White background variant
            color: theme.palette.typography.tertiary.main300, // Tertiary text color
            border: `0.8px solid ${theme.palette.border.customBorder.border50}`, // Light border color
            borderRadius: theme.shape.borderRadius,
            "&:hover": {
              backgroundColor: theme.palette.background.bgcolor.bg50,
            },
            "& svg": {
              fill: theme.palette.icon.default,
            },
            "& .MuiButton-startIcon": {
              marginLeft: "0px",
              marginRight: "0px",
              padding: "0px 4px",
            },
            "& .Mui-disabled": {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary, // Primary text color for disabled state
            },
          }),
        },
      ],
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          // padding: 0,
        },
        colorPrimary: {
          color: ({ theme }) => theme.palette.background.bg100,
          "&:hover": {
            color: ({ theme }) => theme.palette.hover.hover50,
          },
          "&.Mui-checked": {
            color: ({ theme }) => theme.palette.primary.main,
          },
          "&.Mui-disabled": {
            opacity: 0.65,
            color: ({ theme }) => theme.palette.background.bg200,
          },
          "&.Mui-checked.Mui-disabled": {
            opacity: 0.65,
            color: ({ theme }) => theme.palette.primary.main,
          },
        },
      },
    },

    MuiAvatar: {
      variants: [
        {
          props: { size: "small" },
          style: {
            width: "16px",
            height: "16px",
            fontSize: "10px", // Using the defined typography size
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: "20px",
            height: "20px",
            fontSize: "12px", // Using the defined typography size
          },
        },
        {
          props: { size: "large" },
          style: {
            width: "24px",
            height: "24px",
            fontSize: "12px", // Using the defined typography size
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "4px 8px",
          background: "#F5F7FA",
          height: "auto",
        },
        label: {
          paddingLeft: 0,
          paddingRight: 0,
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          fontSize: "12px",
          lineHeight: "14px",
        },
        deleteIcon: {
          margin: 0,
          marginLeft: "4px !important",
          fontSize: "14px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            "& .MuiOutlinedInput-root": {
              background: "#FFFFFF",
              border: "0.8px solid #E2E8F0",
              paddingLeft: "8px",
              paddingRight: "8px",
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                // border: "0.8px solid  #E2E8F0",
                border: "none",
              },
              "&.Mui-disabled fieldset": {
                // border: "0.8px solid #E2E8F0",
                border: "none",
              },
              "&:hover": {
                border: `0.8px solid ${theme.palette.primary.main}`,
              },
              "&:focus": {
                border: `0.8px solid ${theme.palette.primary.main}`,
              },
              "&.Mui-disabled": {
                backgroundColor: "#F9F9F9",
                borderRadius: "4px",
                border: "0.8px solid  #E2E8F0",
              },
            },
            "& .MuiOutlinedInput-input": {
              fontWeight: 400,
              fontSize: "12px",
              fontFamily: "'Segoe UI','Roboto','Helvetica','Arial',sans-serif",
              lineHeight: "16px",
              color: "#333333",

              "&[type=number]": {
                MozAppearance: "textfield",
              },
              "&::placeholder": {
                color: "#8290A3",
                visibility: 1,
                opacity: 1,
                fontWeight: 400,
                fontSize: "12px",
              },
              "&.Mui-disabled": {
                // backgroundColor: "#F9F9F9",
                borderRadius: "4px",
              },
              "&:-webkit-autofill": {
                // transition: "background-color 10s ease-in-out 0s",
                boxShadow: "0 0 0 1000px white inset !important",
                backgroundColor: `${theme.palette.background.paper} !important`,
              },
              "&:-webkit-autofill-selected": {
                boxShadow: "0 0 0 1000px white inset !important",
                backgroundColor: `${theme.palette.background.paper} !important`,
              },
              "&:-internal-autofill-selected": {
                boxShadow: "0 0 0 1000px white inset !important",
                backgroundColor: `${theme.palette.background.paper} !important`,
              },
              "&:-moz-autofill": {
                boxShadow: "0 0 0 1000px white inset !important",
                backgroundColor: `${theme.palette.background.paper} !important`,
              },
            },
          };
        },
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            "& .MuiOutlinedInput-input": {
              padding: "6px 6px",
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            "& .MuiOutlinedInput-input": {
              padding: "8px 6px",
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            "& .MuiOutlinedInput-input": {
              padding: "9px 6px",
            },
          },
        },
      ],
    },

    MuiAvatarGroup: {
      variants: [
        {
          props: { size: "small" },
          style: {
            "& .MuiAvatar-root": {
              width: "16px",
              height: "16px",
              fontSize: "10px",
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            "& .MuiAvatar-root": {
              width: "20px",
              height: "20px",
              fontSize: "12px",
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            "& .MuiAvatar-root": {
              width: "24px",
              height: "24px",
              fontSize: "12px",
            },
          },
        },
      ],
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 24,
          height: 12,
          padding: 0,
          display: "flex",
          "&:active": {
            "& .MuiSwitch-thumb": {
              width: 12,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              transform: "translateX(6px)",
            },
          },
          "& .MuiSwitch-switchBase": {
            padding: 2,
            "&.Mui-checked": {
              transform: "translateX(12px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: ({ theme }) => theme.palette.primary.main,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
            width: 8,
            height: 8,
            borderRadius: 6,
          },
          "& .MuiSwitch-track": {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: "rgba(0,0,0,.25)",
            boxSizing: "border-box",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const { vertical } = ownerState;
          return {
            "& .Mui-selected": {
              color: theme.palette.primary.main + " !important",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.primary.main,
              height: vertical ? "inherit" : "1px",
            },
            "& .MuiButtonBase-root": {
              color: "inherit",
            },
            minHeight: "36px",
            paddingLeft: vertical ? "inherit" : "12px",
          };
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          padding: "8px",
          minHeight: "36px",
          "&:focus": {
            outline: "none",
          },
          textTransform: "capitalize",
          fontWeight: "400",
        },
      },
    },
    MuiGrid2: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const { fullheight } = ownerState;
          return {
            height: fullheight == "true" ? "100%" : "initial",
          };
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {},
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => {
          return {
            backgroundColor: theme.palette.background.bgcolor.bg800,
            // textTransform: "capitalize",
            fontSize: "12px",
          };
        },
        arrow: ({ theme }) => {
          return {
            color: theme.palette.background.bgcolor.bg800,
          };
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "12px",
          color: theme.palette.typography.default,
          padding: "8px",
          backgroundColor: theme.palette.background.bgcolor.bg50,
          "&:hover": {
            backgroundColor: theme.palette.background.bgcolor.bg200,
          },
        }),
      },
    },

    MuiMenuList: {
      styleOverrides: {
        root: {
          minWidth: "100px",
          padding: 0,
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          minWidth: "100px",
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
  },
});

export default theme;
