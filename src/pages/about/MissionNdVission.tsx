import {
    Box,
    Container,
} from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MissionNdvalues from '../../components/MissionNdValues'
import TrackDetails from '../../components/TrackDetails'

export default function Simple() {
    return (
        <Container maxW={'7xl'} px={0} >
            <Box width={'full'}>
                <Navbar />
            </Box>

            <MissionNdvalues />

            <TrackDetails />

            <Box width={'full'}>
                <Footer />
            </Box>
        </Container>
    )
}