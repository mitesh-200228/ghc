import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

export default function TrackDetails() {
    return (
        <Box bg={useColorModeValue('gray.200', 'gray.800')} position={'relative'} p={{ base: 2, md: 4 }}>
            <Flex
                flex={1}
                zIndex={0}
                display={{ base: 'none', lg: 'flex' }}
                backgroundImage="url('https://th.bing.com/th/id/OIG.BiygFYA_xk.7TSrVNGJp?pid=ImgGn')"
                backgroundSize={'cover'}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position={'absolute'}
                width={'55%'}
                insetY={0}
                right={0}>
                <Flex
                    bgGradient={useColorModeValue('linear(to-r, gray.200 0%, transparent)', 'linear(to-r, gray.800 10%, transparent)')}
                    w={'full'}
                    h={'full'}
                />
            </Flex>
            <Container maxW={'7xl'} zIndex={2} position={'relative'}>
                <Stack direction={{ base: 'column', lg: 'row' }}>
                    <Stack
                        flex={1}
                        color={'gray.400'}
                        justify={{ lg: 'center' }}
                        py={{ base: 4, md: 16, xl: 30 }}>
                        <Box mb={{ base: 8, md: 10 }}>
                            <Text
                                fontFamily={'heading'}
                                fontWeight={700}
                                textTransform={'uppercase'}
                                mb={3}
                                fontSize={'xl'}
                                color={'gray.500'}>
                                March 2024
                            </Text>
                            <Heading color={useColorModeValue('gray.900','white')} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                                The Global Hyperloop Conference
                            </Heading>
                            <Text fontSize={'xl'} color={useColorModeValue('gray.600', 'gray.400')}>
                                The Global Hyperloop Conference (GHC) will mark the first ever international conference on disruptive transportation to be held in India. The conference brings together leading companies, visionary speakers and hyperloop enthusiastic teams, to give them an unparalleled opportunity on a leading platform to share their vision on Hyperloop as a sustainable transportation system of the future.
                            </Text>
                            <Text fontSize={'xl'} color={useColorModeValue('gray.600', 'gray.400')} mt={4}>
                                The conference will host experts who have significantly contributed to the technological revolution. These leading experts will be sharing their first-hand experiences, successes and challenges!
                            </Text>

                        </Box>
                    </Stack>
                    <Flex flex={1} />
                </Stack>
            </Container>
        </Box>
    )
}

