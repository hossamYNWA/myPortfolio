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
      id="tabs"
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
              As a Front-End Web Developer with a strong foundation in HTML,
              CSS, and JavaScript, I specialize in creating dynamic user
              interfaces using React. My experience includes developing various
              projects, such as a small eCommerce site and landing pages, as
              well as more complex applications that tailor user configurations
              for optimal system specifications. I also created a web app that
              evaluates building designs against biophilic design criteria.
              Transitioning from a career in pharmacy to web development, I am
              eager to leverage my skills in libraries like Material-UI and
              PatternFly while continually expanding my knowledge in programming
              languages such as C++ and Python. My portfolio reflects my
              dedication to crafting engaging and user-centric web experiences.
            </p>
          </TabPanel>
        </div>
      </TabContext>
    </Box>
  );
};

export default TabsSection;
