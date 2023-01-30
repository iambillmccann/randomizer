import { Text, Flex } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

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
        <Text fontSize={72}>Bill McCann</Text>
      </Flex>
    </>
  )
}

export default HomePage
