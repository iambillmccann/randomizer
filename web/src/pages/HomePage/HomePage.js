import { Text, Flex, ScaleFade } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const displayThis = () => {
  const names = [
    'Bill McCann',
    'Susan McCann',
    'Joe McCann',
    'Holly McCann',
    'Daisy',
    'Honey',
  ]
  const choice = Math.floor(Math.random() * names.length)
  return names[choice]
}

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Flex
        width={'100%'}
        height={'600'}
        justify={'center'}
        align={'center'}
        borderWidth={'2px'}
        borderColor={'gray.100'}
        boxShadow={'md'}
        margin={'5px'}
        bg={'gray.50'}
      >
        <ScaleFade initialScale={0.25} in={true}>
          <Text fontSize={72}>{displayThis()}</Text>
        </ScaleFade>
      </Flex>
    </>
  )
}

export default HomePage
