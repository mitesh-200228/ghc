import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function TrackDetails() {
    return (
        <Box bg={'gray.800'} position={'relative'} p={4}>
            <Flex
                flex={1}
                zIndex={0}
                display={{ base: 'none', lg: 'flex' }}
                backgroundImage="url('https://th.bing.com/th/id/OIG.PtY0Zk.uF9f2vUX6NLX3?pid=ImgGn')"
                backgroundSize={'cover'}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position={'absolute'}
                width={'50%'}
                insetY={0}
                right={0}>
                <Flex
                    bgGradient={'linear(to-r, gray.800 10%, transparent)'}
                    w={'full'}
                    h={'full'}
                />
            </Flex>
            <Container maxW={'7xl'} zIndex={10} position={'relative'}>
                <Stack direction={{ base: 'column', lg: 'row' }}>
                    <Stack
                        flex={1}
                        color={'gray.400'}
                        justify={{ lg: 'center' }}
                        py={{ base: 4, md: 20, xl: 60 }}>
                        <Box mb={{ base: 8, md: 20 }}>
                            <Text
                                fontFamily={'heading'}
                                fontWeight={700}
                                textTransform={'uppercase'}
                                mb={3}
                                fontSize={'xl'}
                                color={'gray.500'}>
                                Track Details
                            </Text>
                            <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                                400m vacuum tube
                            </Heading>
                            <Text fontSize={'xl'} color={'gray.400'}>
                                The hyperloop track features a 2-meter diameter tube spanning a length of 400 meters, designed to maximize efficiency and speed in transportation. With a focus on aerodynamic excellence, the spacious tube minimizes air resistance, allowing hyperloop pods to achieve high velocities with reduced energy consumption.
                            </Text>
                        </Box>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {stats.map((stat) => (
                                <Box key={stat.title}>
                                    <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                                        {stat.title}
                                    </Text>
                                    <Text fontSize={'xl'} color={'gray.400'}>
                                        {stat.content}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Stack>
                    <Flex flex={1} />
                </Stack>
            </Container>
        </Box>
    )
}

const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'white'}>
        {children}
    </Text>
)

const stats = [
    {
        title: 'Length 400m',
        content: (
            <>
                <StatsText>It's Huge Length</StatsText> enhances acceleration and deceleration capabilities, optimizing the overall efficiency of the transportation system.
            </>
        ),
    },
    {
        title: 'Diameter 2m',
        content: (
            <>
                <StatsText>2-meter diameter tube</StatsText> for a hyperloop pod provides enhanced aerodynamic efficiency, minimizing air resistance and allowing for higher speeds with reduced energy consumption.
            </>
        ),
    },
]