import "./InnerMenu.scss"
import { MenuData } from "../MenuData/MenuData"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="BoxTab"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className="Box" sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             className="BoxTab"
//             role="tabpanel"
//             hidden={value !== index}
//             id={`vertical-tabpanel-${index}`}
//             aria-labelledby={`vertical-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box className="Box" sx={{ p: 3 }}>
//                     <div className="wrapper">
//                         <div className="top">
//                             <h1>{children.title}</h1>
//                         </div>
//                         <div className="innerWrapper">
//                             <div className="left">
//                                 <h2>{children.description}</h2>
//                             </div>
//                             <div className="right">
//                                 <img src={children.img} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </Box>
//             )}
//         </div>
//     );
// }

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
export default function InnerMenu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.warn(newValue)
        setValue(newValue);
    };

    return (
        <Box
            className="Top"
            sx={{ flexGrow: 1, bgcolor: '#6a6a8a', display: 'flex' }}
        >
            <Tabs
                className="Tabs"
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "White",
                        textColor: "White"
                    }
                }}
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Plaid" {...a11yProps(0)} />
                <Tab label="Market Watch" {...a11yProps(1)} />
                <Tab label="Stock Page" {...a11yProps(2)} />
                <Tab label="Seach Queries" {...a11yProps(3)} />
                <Tab label="Watchlist" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                {MenuData[0]}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {MenuData[1]}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {MenuData[2]}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {MenuData[3]}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {MenuData[4]}
            </TabPanel>
        </Box>
    );
}
