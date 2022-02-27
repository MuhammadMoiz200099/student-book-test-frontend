import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";

const Home = () => {
  return (
    <Box>
      <Typography>
        <h1>Hi, I'm Muhammad Moiz Siddique</h1>
        <Typography
          sx={{
            width: { sx: "100%", sm: "100%", md: "70%", lg: "60%", xl: "50%" },
            textAlign: "justify",
          }}
        >
          Passion for working on full-stack apps and l am always looking for
          opportunities to grow as an engineer. I have utilised my interpersonal
          skills and detail-oriented nature to continue to improve myself and
          those whom I work with. My specialties include problem-solving,
          quickly learning new skills and programming languages, and efficient
          communication in a team environment. I have experience using
          TypeScript JavaScript, Node.js, Angular JS, React.js, Stencil JS,
          HTML, CSS, Bootstrap, Material and others. My career objective is to
          employ my skills in the software engineering path while continuing to
          soak up as much knowledge and practice as I can to perfect my craft.
        </Typography>
        <Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AlignVerticalBottomIcon />
                </ListItemIcon>
                <ListItemText primary="Expericens: 3 years professional working experices" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ display:'flex', alignItems: 'flex-start' }}>
                <ListItemIcon>
                  <AlignVerticalBottomIcon />
                </ListItemIcon>
                <Typography sx={{ display:'flex', flexDirection: 'column' }}>
                  <ListItemText primary="Experties: " />
                  <Typography sx={{ pl: 3 }}>
                    <ListItemText primary="- Javascript" />
                    <ListItemText primary="- Typescript" />
                    <ListItemText primary="- React JS" />
                    <ListItemText primary="- Angular JS" />
                    <ListItemText primary="- Node JS" />
                    <ListItemText primary="- Nest JS" />
                    <ListItemText primary="- Mongo DB" />
                    <ListItemText primary="- PostgreSQL" />
                    <ListItemText primary="- MSSQL" />
                    <ListItemText primary="- React Native" />
                    <ListItemText primary="- Python" />
                  </Typography>
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Typography>
      </Typography>
    </Box>
  );
};

export default Home;
