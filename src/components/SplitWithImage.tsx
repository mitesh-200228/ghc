import { Text, Image, Container, SimpleGrid, VStack, Heading, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import React from 'react'
import { TfiNewWindow } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const SplitWithImage: React.FC<any> = () => {
    return (
        <Container maxW={'6xl'} py={16} >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
                <VStack spacing={6}>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        objectFit={'cover'}
                    />
                    <Heading>
                        The Conference
                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        The Global Hyperloop Conference is a precursor to the magnanimous Global Hyperloop Competition where the judges, participants, sponsors and orgasnisers will find a platform to interact with each other and the world whilst unveiling the series of events entailed in the Global Hyperloop Competition.
                    </Text>
                    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                        <Link to={'/events/ghc1.0'}>
                            <Button rightIcon={<TfiNewWindow />}>
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </VStack>
                <VStack spacing={6}>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                    <Heading>
                        The Competition
                    </Heading>

                    <Text color={'gray.500'} fontSize={'lg'}>
                        {/* A melange of science, technology and innovation, the Global Hyperloop Competition brings to India the preliminary stage of the profound idea of the fifth mode of transport - the Hyperloop. */}
                        

                        The Global Hyperloop Competition provides a stage for teams, in India and abroad, to showcase their innovation and research in the extensive field of hyperloop thereby propagating the concept globally.

                        Conducted by the Indian Institute of Technology, Madras, GHC envisions fostering a spirit of transformation and transition among the young minds of the world!
                    </Text>
                    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                        <Link to={'/events/ghc1.0'}>
                            <Button rightIcon={<TfiNewWindow />}>
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </VStack>
            </SimpleGrid>
        </Container>
    )
}

export default SplitWithImage