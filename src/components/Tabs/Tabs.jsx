import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
const TabsSection = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        margin: "80px auto",
        width: "100%",
        typography: "body1",
        minHeight: "500px",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            sx={{
              "& .MuiTabs-flexContainer": {
                justifyContent: "center",
                backgroundColor: "var(--primary-color)",
              },
              "& .MuiTabs-flexContainer .Mui-selected": {
                color: "#67a5e2",
                fontSize: "18px",
              },
              "& .MuiTabs-flexContainer button": {
                color: "var(--light-color)",
                fontFamily: "Dosis",
              },
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Projects" value="1" />
            <Tab label="Contact Me" value="2" />
            <Tab label="Breif" value="3" />
          </TabList>
        </Box>
        <div className="panels">
          <TabPanel value="1">
            <Projects />
          </TabPanel>
          <TabPanel value="2">
            <ContactMe />
          </TabPanel>
          <TabPanel value="3">
            <p className="breif">
              with a passion for innovation and a strong foundation in web
              development principles, I strive to craft efficient and responsive
              websites that meet clients needs while adhering to industry best
              practices.
            </p>
            <ContactMe />
          </TabPanel>
        </div>
      </TabContext>
    </Box>
  );
};

export default TabsSection;
