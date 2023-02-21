import { useState, useEffect } from 'react'

import { Text, Flex, ScaleFade, Center, Button } from '@chakra-ui/react'
import randomItems from 'public/StudentNames'

import { MetaTags } from '@redwoodjs/web'

const items = randomItems()

// The function uses recursion to prevent returning the same name twice in a row.
// Because of the above, it's not truly random. Just sayin'.
const getRandomName = (name) => {
  const choice = Math.floor(Math.random() * items.length)
  return items[choice] === name ? getRandomName(name) : items[choice]
}

const HomePage = () => {
  const [name, setName] = useState(getRandomName())
  const [buttonText, setButtonText] = useState('Start')

  useEffect(() => {
    setTimeout(() => {
      setName((name) => {
        if (buttonText === 'Start') return name
        else return getRandomName(name)
      })
    }, 500)
  })

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Center>
        <Flex
          width={'100%'}
          height={'600'}
          justify={'center'}
          align={'center'}
          borderWidth={'2px'}
          borderColor={'BlackAlpha.700'}
          // boxShadow={'md'}
          margin={'5'}
          // bg={'blue.50'}
        >
          <ScaleFade initialScale={0.25} in={true}>
            <Text fontSize={'8xl'} color={'blue.700'} fontWeight={'semibold'}>
              {name}
            </Text>
          </ScaleFade>
        </Flex>
      </Center>
      <Center>
        <Button
          width={'3xs'}
          colorScheme={'blue'}
          variant={'solid'}
          onClick={() =>
            setButtonText(buttonText === 'Start' ? 'Stop' : 'Start')
          }
        >
          {buttonText}
        </Button>
      </Center>
    </>
  )
}

export default HomePage
