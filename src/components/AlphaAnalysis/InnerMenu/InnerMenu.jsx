import "./InnerMenu.scss"
import { MenuData } from "../MenuData/MenuData"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
const styles = {
    default_tab: {
        color: '#4b4b4b'
    },
    active_tab: {
        color: 'white'
    }
}
export default function InnerMenu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const getStyle = (isActive) => {
        return isActive ? styles.active_tab : styles.default_tab
    };
    return (
        <Box
            className="Top"
            sx={{ flexGrow: 1, bgcolor: 'black', display: 'flex' }}
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
                        backgroundColor: "white",
                        textColor: "White"
                    }
                }}
                sx={{ borderRight: 1, borderColor: 'gray' }}
            >
                <Tab style={getStyle(value === 0)} label="Plaid" {...a11yProps(0)} />
                <Tab style={getStyle(value === 1)} label="Market Watch" {...a11yProps(1)} />
                <Tab style={getStyle(value === 2)} label="Stock Page" {...a11yProps(2)} />
                <Tab style={getStyle(value === 3)} label="Seach Queries" {...a11yProps(3)} />
                <Tab style={getStyle(value === 4)} label="Watchlist" {...a11yProps(4)} />
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
        </Box >
    );

}
