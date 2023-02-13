import color from "./base/color";
import global from "./base/global";

import { createTheme } from "@mui/material/styles";

export default createTheme({
    // breakpoints: { ...breakpoints },
    // typography: { ...typography },
    palette: {...color},
    global:{...global},
    components:{
        MuiCssBaseline: {
            // styleOverrides: {...global}
         },
        //  MuiButton: { ...button },
    }
}) 