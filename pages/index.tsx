import { NextPage } from 'next'
import { Box, Container, Typography} from '@mui/material';
import { Grid } from '@mui/material';
import CardAbout from '../components/CardAbout';



const HomePage: NextPage = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          align="center"
          color="text.secondary"
          sx={{
            fontWeight: "400",
            fontSize: { xs: "30px", md: "35px" },
            lineHeight: { xs: "32px", md: "38px" },
            padding: "15px 0"
          }}
        >
          Почему стоит заказать именно в нашей аптеке
        </Typography>
        <Grid container spacing={2}>
          <CardAbout title="Надежность" description="Более 10 000 товаров" img="/static/images/secure.svg" alt="Надежность"/>
          <CardAbout title="Доставка" description="Покупки без пробок и очередей" img="/static/images/shipped.svg" alt="Доставка"/>
          <CardAbout title="Удобство" description="52 аптеки в Воронежской области и 1 в Липецке " img="/static/images/touchscreen.svg" alt="Удобство"/>
          <CardAbout title="Экономия" description="Экономте до 70% при покупке в наших аптеках" img="/static/images/gain.svg" alt="Экономия"/>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomePage