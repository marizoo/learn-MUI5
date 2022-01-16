import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import React from 'react'
import Box from '@mui/material/Box'
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/CustomizedAccordions'
import BasicModal from '../components/BasicModal'

const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component='h1' marginTop={3}>
                Explore the world in Vegas
            </Typography>
            <Box marginTop={3} sx={{display:'flex'}}>
                <img src='https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='las vegas' height={325}/>
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant='paragraph' component='p' marginTop={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo quam nesciunt natus laborum veritatis reprehenderit voluptates tenetur sit error, eius, saepe cumque harum molestias, amet repellat nisi nam consectetur quod eveniet necessitatibus a voluptate quos expedita? Sunt, provident laborum.
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                   <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour
