import { Box, Image, Text, SimpleGrid, Flex, Stack, Heading, useColorModeValue, StackDivider, VStack, List, ListItem, Button, Container } from '@chakra-ui/react'
import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/ghc1.0/Hero'
import TimeLine from '../../components/TimeLine'


const GHC1 = () => {
    return (
        <Container maxW={'7xl'} px={0}>
            <Box width={'full'}>
                <Navbar />
            </Box>

            <Hero />

            <Box
                py={{ base: 4, md: 20, xl: 30 }}
                px={{ base: 6, md: 8 }}
                color={useColorModeValue('gray.800', 'gray.400')}
                maxW={'7xl'}
            >
                <Text fontSize={'xl'}>
                    At GHC, we aspire to cultivate a vision wherein  remote cities are seamlessly connected, providing the world with transportation that is both efficient and sustainable, characterized by high-speed connectivity while significantly reducing the negative impact on the environment. We are driven to provide an opportunity where like-minded individuals get to exchange their ideas, initiate collaborations and guide the teams who aspire to lead the future with their experience.
                </Text>
                <Text fontSize={'xl'} mt={4}>
                    With a 400m tube on the edge we have a vision to conduct a global competition to foster innovation, collaboration, and technological advancement on a worldwide scale. The conference will be the first stepping stone to it.
                    <br />
                    <Text as={'span'} bgGradient="linear(to-r, red.500, purple.300)" bgClip="text" fontSize={'2xl'} fontWeight={'bold'}>Stay tuned for more updates!</Text>
                </Text>
            </Box>

            <TimeLine />

            <VStack
                py={{ base: 4, md: 12, xl: 16 }}
                px={{ base: 6, md: 20 }}
                color={useColorModeValue('gray.800', 'gray.400')}
                maxW={'7xl'}
                justifySelf={'center'}
                spacing={4}
                mb={10}
            >
                <Heading color={useColorModeValue('gray.900', 'white')} fontSize={{ base: '3xl', md: '5xl' }}>Enlighten & Inspire: Explore Our Lecture Series</Heading>
                <Text fontSize={'xl'}>The Online Lecture Series organized by the GHC aims to educate the public and college students about the Hyperloop and provide them with high-quality technical insight into the workings of the technologies involved in building groundbreaking mass-transportation systems with the help of the best Hyperloop teams across the country. Stay tuned for more!</Text>
            </VStack>

            <Box width={'full'}>
                <Footer />
            </Box>
        </Container>
    )
}

export default GHC1