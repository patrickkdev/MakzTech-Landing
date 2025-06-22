/* eslint-disable @next/next/no-img-element */
import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import CTA from '../header/cta';

const Navbar = () => {

  const screenIsSmall = useMediaQuery(useTheme().breakpoints.down('sm'));

  return (
    <Box sx={{bgcolor: 'background.paper'}}>
      <Container maxWidth="lg" sx={{padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Link href="/" style={{display: "flex", alignItems: "center", gap: "24px"}}>
          <img src="/makztech-st.png" alt="logo" style={{width: "50px"}} />
          <div>
            <Typography><strong>Makz</strong>Tech</Typography>
            Desenvolvimento de Software
          </div>
        </Link>        
        <Stack direction="row" spacing={4} divider={<Divider orientation='vertical' flexItem />}>
          <CTA hideText={screenIsSmall} />
        </Stack>
      </Container>
      <Divider orientation='horizontal' sx={{width: '100%'}}/>
    </Box>
  )
}

export default Navbar