import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FaStar } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import { useTheme } from "@mui/system";

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};
const items = [
  {
    title: "Job Hits",
    description: "32",
  },
  {
    title: "ShortListed",
    description: "18",
  },
];

const sampleText = [
  {
    avatar: <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dymmp1vtz/image/upload/v1702892449/imageProfile_umcjom.png" />,
    name: "Sr. Java Developer with MySQL Database",
    occupation: "Senior Engineer",
    sampleData:
      "Skills: HTML javaScript Bootstrap Ract JS Node JS",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="https://res.cloudinary.com/dymmp1vtz/image/upload/v1702892449/imageProfile_umcjom.png" />,
    name: "Angular Developer With Magento DB",
    occupation: "Lead Product Designer",
    sampleData:
    "Skills: HTML javaScript Bootstrap Ract JS Node JS"
    },
  {
    avatar: <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/dymmp1vtz/image/upload/v1702892449/imageProfile_umcjom.png" />,
    name: "Jr. UI Developer With Adobe Creative suit",
    occupation: "CTO",
    sampleData:
    "Skills: HTML javaScript Bootstrap Ract JS Node JS"
    },
];

export default function Features() {
  const theme = useTheme();

  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features">
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <div className="side-bar-container-one">
            <img
              src={
                "https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg?t=st=1710348962~exp=1710352562~hmac=ead6117ecbfdf84c4c79d710ad5bbec0ecd5e2fd9b17f6d04683b4e97b8931b7&w=996"
              }
              className="my-sidebar-logo"
              alt="logo of sitemark"
            />
            <Typography component="h2" variant="h4" color="text.primary">
              James Camroon
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Business Process Assoicate Google Inc
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.light" : "";
                    }
                    return selectedItemIndex === index ? "primary.light" : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {selectedFeature.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "50%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index
                        ? "primary.light"
                        : "grey.200";
                    }
                    return selectedItemIndex === index
                      ? "primary.dark"
                      : "grey.800";
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300";
                        }
                        return selectedItemIndex === index
                          ? "primary.main"
                          : "grey.700";
                      },
                    }}
                  ></Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            <Button className="mt-3" variant="contained" color="primary">
              Improve Your Profile
            </Button>
            <img
              src={
                "https://img.freepik.com/premium-photo/3d-illustration-control-panel-icon-high-risk-concept-spedometer-credit-rating-scale_116124-16634.jpg?w=996"
              }
              className="my-score-logo"
              alt="logo of sitemark"
            />
            <span
              className="a-declarative"
              data-action="a-popover"
              data-csa-c-type="widget"
              data-csa-c-func-deps="aui-da-a-popover"
              data-a-popover='{"max-width":"700","closeButton":"false","position":"triggerBottom","url":"/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&asin=B0CMTTRN8M"}'
              data-csa-c-id="4usixv-lkf2a8-4vxuos-ds3ns6"
            >
              <a
                href="javascript:void(0)"
                role="button"
                className="a-popover-trigger a-declarative"
              >
                <FaStar className="cm-cr-review-stars-spacing-big" />
                <FaStar className="cm-cr-review-stars-spacing-big" />
                <FaStar className="cm-cr-review-stars-spacing-big" />
                <FaStar className="cm-cr-review-stars-spacing-big" />
                <FaStar className="a-icon-popover" />
                <span className=" m-2">5 Rating</span>
              </a>
            </span>

            <h6>Last Visited: 14 Hours Ago</h6>
          </Stack>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {/* First container */}
            <Grid item xs={12} md={6}>
              {sampleText.map((sampleData, index) => (
                <Card
                  key={index}
                  sx={{
                    display: "flex",
                    marginTop: "5px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                    p: 1,
                  }}
                >
                  <CardHeader
                    title={sampleData.name}
                    
                  />                  
                  <CardHeader
                    avatar={sampleData.avatar}
                    title={sampleData.name}
                    subheader={sampleData.sampleData}
                  />
  
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "right",
                      pr: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Posted 3 days ago
                    </Typography>
                    
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      pr: 2,
                    }}
                  ></Box>
                </Card>
              ))}
            </Grid>
            {/* Second container */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // flexGrow: 1,
                // p: 1,
              }}
              item
              xs={12}
              md={6}
            >
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    pr: 2,
                  }}
                >
                  <img
                    src={
                      "https://img.freepik.com/premium-photo/3d-job-concept-with-lens-3d-rendered-illustration_441797-4607.jpg?w=826"
                    }
                    className="my-score-logo"
                    alt="logo of sitemark"
                  />
                  <Typography color="text.secondary">
                    This job posting has no applicants through sample text
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // flexGrow: 1,
                // p: 1,
              }}
              item
              xs={12}
            >
              <Card className="p-0">
                <CardContent
                  className="bg-none"
                  sx={{
                    display: "flex",
                    flexDirection: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={
                      "https://img.freepik.com/premium-photo/3d-job-concept-with-lens-3d-rendered-illustration_441797-4607.jpg?w=826"
                    }
                    className="my-sidebar-logo"
                    alt="logo of sitemark"
                  />
                  <div>
                    <h4>
                      What it feels likes to hasve 48% mope interview calls
                    </h4>
                    <Typography color="text.secondary">
                      This job posting has no applicants through sample text
                    </Typography>
                  </div>

                  <Button variant="contained" color="primary">
                    Ask Here
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
