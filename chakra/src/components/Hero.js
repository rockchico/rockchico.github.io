import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

import {Link} from 'next'

export const Hero = ({ title }) => (

  <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={6} w={'full'} maxW={'lg'}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          <Text color={'blue.400'} as={'span'} size={'8vh'}>
            Francisco Schwertner
          </Text>{' '}
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1,
            }}>
            Freelance
          </Text>
          <br />{' '}

        </Heading>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Web Development, React/Node/Python
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
              <a target="_blank" href="https://github.com/rockchico/rockchico.github.io/raw/master/Francisco_Dev_back_end.pdf" rel="noopener noreferrer">
                CV / Résumé
              </a>
          </Button>

        </Stack>
      </Stack>
    </Flex>
    <Flex flex={1}>
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={
          'https://images.unsplash.com/photo-1579361746237-3c8054b195e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
        }
      />
    </Flex>
  </Stack>

)

Hero.defaultProps = {
  title: 'Francisco Schwertner',
}
