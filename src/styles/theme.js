import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        background: {
            default: "#eef1f4",
            paper: "#eef1f4",
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.default, // your custom color
                    color: 'rgb(65,65,66)',
                }),
            },
        },
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: 12,
                    padding: theme.spacing(2),
//                    border: `1px solid ${theme.palette.mode === "dark"
//                        ? "rgba(255,255,255,0.08)"
//                        : "rgba(16,24,40,0.06)"
//                        }`,
                   backgroundColor:
                       theme.palette.mode === "dark"
                           ? "rgba(255,255,255,0.03)"
                           : "#fafdfc",
 //                   boxShadow:
 //                       theme.palette.mode === "dark"
 //                           ? "0px 4px 12px rgba(0,0,0,0.5)"
 //                           : "0px 4px 16px rgba(16,24,40,0.08)",
 //                   transition: "transform 0.2s ease, box-shadow 0.2s ease",
 //                   //"&:hover": {
                    //    boxShadow:
                    //        theme.palette.mode === "dark"
                    //            ? "0px 8px 20px rgba(0,0,0,0.6)"
                    //            : "0px 8px 24px rgba(16,24,40,0.10)",
                    //},
                }),
            },
        },
    },
});