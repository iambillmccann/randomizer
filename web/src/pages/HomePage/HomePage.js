// TODO: This program is currently broken. It is not showing all items in the list, instead it is
//       removing (?) two items before they are chosen. This requires stepping through the code
//       and I do not have time for that at the moment.
import { useState, useEffect } from 'react'

import { Text, Flex, ScaleFade, Center, Button } from '@chakra-ui/react'
import randomItems from 'public/AssignmentsSpring2025'

import { MetaTags } from '@redwoodjs/web'

let items = randomItems()

// The function uses recursion to prevent returning the same name twice in a row.
// Because of the above, it's not truly random. Just sayin'.
const getRandomName = (name) => {
  if (items.length === 1) return items[0]
  const choice = Math.floor(Math.random() * items.length)
  return items[choice] === name ? getRandomName(name) : items[choice]
}

// There is a glitch with this code. The page is rendered twice for each button click
// which means this function will be executed twice. Checking the index >= 0 prevents
// inadvertantly removing an extra item.
const removeName = (name) => {
  if (items.length > 1) {
    const index = items.indexOf(name)
    if (index >= 0) {
      items.splice(index, 1)
    }
  }
  return name
}

const HomePage = () => {
  const [name, setName] = useState('Click Start for Random Name')
  const [buttonText, setButtonText] = useState('Start')
  const [startStop, setStartStop] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setName((name) => {
        if (buttonText === 'Start') return removeName(name)
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
          boxShadow={'md'}
          margin={'5'}
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
          onClick={() => {
            setStartStop(startStop ? false : true)
            if (startStop) {
              setButtonText('Start')
              // removeName(name)
            } else setButtonText('Stop')
          }}
        >
          {buttonText}
        </Button>
      </Center>
    </>
  )
}

export default HomePage
