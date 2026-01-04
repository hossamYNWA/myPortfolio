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
            <Tab label="My Top Projects" value="1" />
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
            <p className="breif" style={{ paddingBottom: "20px" }}>
              <h2>About Me</h2>
              <p>
                With over a decade of experience in the retail pharmacy
                industry, my career has always been guided by curiosity and a
                data‑driven mindset. What began as using Excel to organize store
                operations evolved into a passion for exploring data and
                unlocking insights that improve performance and decision‑making.
              </p>
              <p>
                Over the past eight years, I’ve specialized in Excel and, during
                2025, expanded my analytical toolkit by learning{" "}
                <strong>Power BI</strong>, <strong>SQL</strong>, and{" "}
                <strong>Python</strong>. Through hands‑on projects, I’ve built a
                strong foundation in <strong>ETL processes</strong>,{" "}
                <strong>data cleaning</strong>, and{" "}
                <strong>exploratory data analysis (EDA)</strong> — transforming
                complex datasets into clear, impactful dashboards and reports
                that address key business questions.
              </p>
              <p>
                To deepen my expertise, I completed more than{" "}
                <strong>15 certificates</strong> on DataCamp, continuously
                improving my skills in data visualization, analysis, and
                automation. My journey reflects a commitment to growth,
                precision, and using data as a powerful tool for meaningful
                business insights.
              </p>
            </p>
          </TabPanel>
        </div>
      </TabContext>
    </Box>
  );
};

export default TabsSection;
