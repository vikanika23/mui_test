import { Box, Container, Typography, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const CardAbout = ({title, description, img, alt}) => (
  <Grid item xs={4} sm={6} lg={3}>
    <Card
      sx={{
        maxWidth: 318,
        align: "center",
        borderRadius: '30px',
        height: '100%',
        padding: '30px 30px',
        textAlign: 'center',
        background: '#FFFFFF',
      }}
    >
      <CardActionArea
        sx={{
          '& .MuiCardMedia-root': { width: "117px" },
        }}
      >
        <CardMedia
          component="img"
          width="117"
          image={img}
          alt={alt}
          sx={{
            margin: 'auto',
          }}
        />
        <CardContent>
          <Typography
            component="h5"
            align="center"
            color="text.primary"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: { xs: "18px", md: "24px" },
              padding: "15px 0"
            }}
          >
            {title}
          </Typography>

          <Typography
            component="p"
            align="center"
            color="text.primary"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: { xs: "18px", md: "24px" },
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
)

export default CardAbout