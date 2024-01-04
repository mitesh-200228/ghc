'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function SimpleAccordion() {
  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      marginBottom={'5%'}
      justify={'center'}
      flexDirection={'column'}
    //   bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Text fontWeight={600} fontSize={'4xl'} padding={5}>FAQs</Text>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="xl">What is GHC?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                GHC stands for Global Hyperloop Competition, which aims to provide a plateform to all the Hyperloop enthusiast teams where they can put forward their ideas and contibute to gloom the Hyperloop community.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="xl"> When and Where will GHC be held?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                The conference is scheduled for March 2024 and the competition is scheduled for January 2025, both being held in IIT Madras, India
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="xl"> Who can apply?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                All the student teams around the globe can participate in the competition.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}