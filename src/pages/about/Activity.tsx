import { Box, Container, Flex, HStack, Heading, Image, VStack, Text, Icon } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { InstagramEmbed, LinkedInEmbed } from 'react-social-media-embed';
import { AiOutlineLike } from "react-icons/ai";
import { CgComment } from "react-icons/cg";
import { IoIosSend } from "react-icons/io";

const LinkedInCard = ({ image, title, postUrl }: { image: string, title: string, postUrl: string }) => {
    return (
        <VStack height={'fit-content'} as={'a'} target='_blank' href={postUrl} borderWidth={'1px'} bg={'gray.50'} py={6} rounded={'md'} maxWidth={'320px'} spacing={4}>
            <HStack spacing={4}>
                <Image
                    src='https://media.licdn.com/dms/image/D560BAQHnhPt5WzYP9g/company-logo_100_100/0/1699265383714?e=1710374400&v=beta&t=GvHPws-aTOay5MdCQ7Y19avhHE7E9DFKn_2-lo2XbuQ'
                    alt='ghc logo'
                    h={10} />
                <VStack textAlign={'left'} align={'left'} spacing={0}>
                    <Text color={'gray.900'} fontWeight={600} >Global Hyperloop Competition</Text>
                    <Text color={'gray.500'} fontSize={'xs'}>78 followers</Text>
                </VStack>
            </HStack>

            <Box px={4}>
                <Text color={'gray.700'} fontSize={'sm'}>{title}</Text>
            </Box>

            <Image src={image} alt='post_image' width={'full'} />

            <HStack mt={4} pt={4} borderTopWidth={'1px'} borderColor={'gray.300'} w={'90%'} h={'fit-content'} spacing={4} color={'gray.600'} justifyContent={'space-evenly'} >
                <Icon  boxSize={6} as={AiOutlineLike} />
                <Icon boxSize={6} as={CgComment} />
                <Icon boxSize={6} as={IoIosSend} />
            </HStack>
        </VStack>
    )
}

const Activity: React.FC<any> = () => {
    return (
        <Container maxW='7xl' px={0} overflowX={'hidden'}>
            <Navbar />
            <Container maxW={'3xl'} textAlign={'center'} p={8}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Social Media Activity
                </Heading>
            </Container>

            <Container maxW={'6xl'} my={2} overflowX={'hidden'} mb={16}>
                <Container maxW={'3xl'} textAlign={'center'} mb={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Image alt='insta logo' src='/insta-logo.png' h={8} mr={4} />
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} w={"fit-content"} >
                        Instagram
                    </Heading>
                </Container>
                <Flex flexWrap="wrap" gridGap={10} justify="center">
                    <InstagramEmbed url="https://www.instagram.com/p/C0PNdE8yxfQ/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/CzQx_dSIS4G/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/CyIlA8wJnMK/" width={328} />
                </Flex>
            </Container>


            <Container maxW={'6xl'} my={2} overflowX={'hidden'} mb={12}>
                <Container maxW={'3xl'} textAlign={'center'} mb={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Image alt='insta logo' src='/linkedin-logo.webp' h={16} mr={1} />
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} w={"fit-content"} >
                        LinkedIn
                    </Heading>
                </Container>
                <Flex flexWrap="wrap" gridGap={10} justify="center">
                    <LinkedInCard title='The organising team of the Global Hyperloop Competition IITM was fortunate enough to meet the current Chairman of...' image='https://media.licdn.com/dms/image/D4D22AQHH8UNFCgpPtA/feedshare-shrink_800/0/1701938193706?e=1705536000&v=beta&t=aShAK1nU40hWVRn-ZQKYsokMjUA_qTK9BxzPkFNBuf8' postUrl='https://www.linkedin.com/posts/global-hyperloop-competition-iitm_the-organising-team-of-the-global-hyperloop-activity-7138446180790816768-Hgme?utm_source=share&utm_medium=member_desktop' />
                    <LinkedInCard title='Presenting to you the rapid progress of the 400 m tube - a solid 40 m - made by the tremendous efforts of both IIT Madras and Avishkar Hyperloop...' image='https://media.licdn.com/dms/image/D4E22AQFOnIbSgr2sZQ/feedshare-shrink_1280/0/1701338115987?e=1705536000&v=beta&t=tIRT0h6cPlFnuQaFo5ZX7OSvnSdW9jAA-_jGRMVDU6U' postUrl='https://www.linkedin.com/posts/global-hyperloop-competition-iitm_hyperloop-indianhyperloop-sustainability-activity-7135929343804878848-rX17?utm_source=share&utm_medium=member_desktop' />
                </Flex>
            </Container>
            <Footer />
        </Container>
    )
}

export default Activity