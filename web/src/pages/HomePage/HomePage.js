import { useState, useEffect } from 'react'

import { Text, Flex, ScaleFade } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const names = [
  'Bill McCann',
  'Susan McCann',
  'Joe McCann',
  'Holly McCann',
  'Daisy',
  'Honey',
]

const getRandomName = (name) => {
  const choice = Math.floor(Math.random() * names.length)
  return names[choice] === name ? getRandomName(name) : names[choice]
}

const HomePage = () => {
  const [name, setName] = useState(getRandomName())
  useEffect(() => {
    setTimeout(() => {
      setName((name) => getRandomName(name))
    }, 500)
  })

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
          <Text fontSize={72}>{name}</Text>
        </ScaleFade>
      </Flex>
    </>
  )
}

export default HomePage
