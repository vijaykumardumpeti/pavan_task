import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import Chip from "@mui/material/Chip";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { FaStar } from "react-icons/fa";

import './Testimonials.css'



const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: "Remy Sharp",
    occupation: "Senior Engineer",
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: "Travis Howard",
    occupation: "Lead Product Designer",
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: "Cindy Baker",
    occupation: "CTO",
    testimonial:
      "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: "Julia Stewart",
    occupation: "Senior Engineer",
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: "John Smith",
    occupation: "Product Designer",
    testimonial:
      "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: "Daniel Wolf",
    occupation: "CDO",
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

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
const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

const savedSearches = [
  {
    avatar: <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dymmp1vtz/image/upload/v1702892449/imageProfile_umcjom.png" />,
    name: "WordPress integrator with 2+ years",
    occupation: "Senior Engineer",
    sampleData: "Location: Hyderabad",
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dymmp1vtz/image/upload/v1702892449/imageProfile_umcjom.png" />,
    name: "Sr. Web Designer With Adobe Suite",
    occupation: "Senior Engineer",
    sampleData: "Location: Mumbai",
  },
];


const recentSearches = [
  {
    avatar: <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dymmp1vtz/image/upload/v1702892449/imageProfile_umcjom.png" />,
    name: "React Js Developer With Node Js",
    occupation: "Senior Engineer",
    sampleData: "Location: Chennai",
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dymmp1vtz/image/upload/v1702892449/imageProfile_umcjom.png" />,
    name: "Business Analist Programmer",
    occupation: "Senior Engineer",
    sampleData: "Location: Chennai",
  },
]

export default function Testimonials() {
  const theme = useTheme();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };
  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features">
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          {/* <div className="side-bar-container-one">
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
          </div> */}
          {/* <Grid
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
          </Grid> */}
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
          {/* <Stack
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
          </Stack> */}
          {/* <Stack
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
          </Stack> */}


          <Card 
                  sx={{
                    display: "flex",
                    marginTop: "-30px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                    p: 1,
                    height: '100%'
                  }}>
            <CardContent className="card-content">
              <div className="pic-with-data-container">
              <div className="elevate-container">
                  <h4 className="elevate-heading">Elevate Your Work</h4>
                  <h2 className="learn-grow"> LEARN. GROW. SUCCEED</h2>
                  <span>bring your ideas.
                    Discover your potential.
                  </span>              
              </div>

              <div class="image-container">
                <img
                    src={
                      "https://res.cloudinary.com/dymmp1vtz/image/upload/v1650341068/samples/imagecon-group.jpg"
                    }
                    className="my-score-logo"
                    alt="logo of sitemark"
                  />
              </div>
              <div className="cognizent-container">
                  <span>Diversity Drive @</span> 
                  <h1> Cognizent</h1>
                  <button className="apply-btn">Apply Now</button>              
              </div>
              </div>
            </CardContent>
          </Card>


        </Grid>

        <Grid item xs={12} md={8}>
          <Grid
            sx={{
              display: "flex",
              marginTop: "5px",
              flexDirection: "row",
              justifyContent: "space-between",
              flexGrow: 1,
              p: 1,
            }}
            container
            spacing={1}
          >
            {/* First container */}
            <div className="second-botom-container mb-5 p-2">
              <div className="d-flex justify-content-between">
                <h4>Saved Searches</h4>
                <p>View all</p>
              </div>
              <Grid item xs={12} md={12}>
                {savedSearches.map((sampleData, index) => (
                  <Card
                    key={index}
                    sx={{
                      display: "flex",
                      marginTop: "5px",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
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
                      }}
                    ></CardContent>
                  </Card>
                ))}
              </Grid>
            </div>
            {/* First container */}
            <div className="second-botom-container mb-5 p-2">
              <div className="d-flex justify-content-between">
                <h4>Recent Searches</h4>
                <p>View all</p>
              </div>
              <Grid item xs={12} md={12}>
                {recentSearches.map((sampleData, index) => (
                  <Card
                    key={index}
                    sx={{
                      display: "flex",
                      marginTop: "5px",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
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
                      }}
                    ></CardContent>
                  </Card>
                ))}
              </Grid>
            </div>

            {/* Second container */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexGrow: 1,
                p: 1,
              }}
              item
              xs={12}
            >
              <Card className="p-0">
                <CardContent
                  className="bg-white"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Typography color="text.secondary">
                      <ul>
                        <li>Give a make over to corporate profile</li>
                        <li>Screen and Videocapture software enables users</li>
                        <li>Give a make over to corporate profile</li>
                      </ul>
                    </Typography>
                  </div>
                  <img
                    src={
                      "https://img.freepik.com/premium-vector/cartoon-character-professional-hr-manager-selecting-resumes_776652-916.jpg?w=740"
                    }
                    className="my-score-logo-2"
                    alt="logo of sitemark"
                  />
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
              {/* <Card className="p-0">
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
              </Card> */}
              <Card
                  className="bg-none"
                  sx={{
                    marginTop: "10px",
                    height: '320px',
                  }}>
                <CardContent             
                className="bg-none"
                  sx={{
                    display: "flex",
                    flexDirection: "flex",
                    justifyContent: "space-around",
                    marginTop: "10px",
                  }}>
                    {
                      userGuides.map(guide =>  
                        <div className="user-guide"> 
                          <img className="image-story-set" src={guide.url} alt="Resume Highlighter"/>
                          <h6 className="story-head">{guide.title}</h6>
                          <span>{guide.description}</span>
                          <div className="anchor-container">
                            <a href="#">Read more</a>
                          </div>
                      </div> 
                        )
                    }    
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const userGuides = [
{
  url: 'https://res.cloudinary.com/dymmp1vtz/image/upload/v1710398222/Creative_writing-rafiki_csmivd.png',
  title: 'Resume Highlighter',
  description: 'Grab the attention of employers'
},
{
  url: 'https://res.cloudinary.com/dymmp1vtz/image/upload/v1710398270/Course_app-rafiki_sdts15.png',
  title: 'Carrer Up Skills',
  description: 'Get the power of two in one and speed up your job search'
},
{
  url: 'https://res.cloudinary.com/dymmp1vtz/image/upload/v1710398098/Developer_activity-bro_pywxjw.png',
  title: 'Create Cv',
  description: 'Professioncy written resume + cover letter'
},
{
  url: 'https://res.cloudinary.com/dymmp1vtz/image/upload/v1710398172/Career_progress-rafiki_jxyzgf.png',
  title: 'Learning Point',
  description: 'Grab the attention of employers'
}
]