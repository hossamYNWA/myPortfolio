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
              Hi, I’m a Front-End Web Developer with a strong foundation in
              HTML, CSS, and JavaScript, and hands-on experience with React. My
              journey into web development has been a rewarding transition from
              my original career in pharmacy, and it’s fueled by my passion for
              creating functional, user-friendly, and visually appealing web
              applications. I’ve worked on a variety of projects, including:
              <ul>
                <li>
                  A biophilic design evaluation tool, which assesses building
                  designs based on specific criteria.
                </li>
                <li>
                  A web app for window configuration, where users can customize
                  materials, sizes, and glass thickness.
                </li>
                <li>
                  A small eCommerce site and landing pages built during my
                  training.
                </li>
              </ul>
              <br />I also enjoy working with styling libraries like Material-UI
              and PatternFly, and I have some experience with C++ and Python.
              While most of my projects have been self-initiated as part of my
              learning journey, they reflect my dedication to improving my
              skills and delivering meaningful solutions. I’m excited to
              continue growing as a developer and contributing to projects that
              make a real impact.
            </p>
          </TabPanel>
        </div>
      </TabContext>
    </Box>
  );
};

export default TabsSection;
