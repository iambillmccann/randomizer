import { useState, useEffect } from 'react'

import { Text, Flex, ScaleFade, Center, Button } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const names = [
  'Gabriela Acevedo',
  'Rayaan Azmi',
  'Safiullah Baig',
  'Erik Chodaba',
  'Manal Desai',
  'Riya Desai',
  'Keya Dhruve',
  'Thomas Ehrola',
  'KellyAnne George',
  'Jillian Jacinto',
  'Dhyeykumar Kansagara',
  'Avneet Kaur',
  'Murtajiz Kazmi',
  'Steven Kyritsis',
  'Saketh Lakshmanan Sathiskumar',
  'Thomas Lanzetti',
  'Mehak Maqsood',
  'Ryan McCusker',
  'Matea Milloshi',
  'Eli Mojica',
  'Cristhian Molina Luna',
  'Deanna Mostafa',
  'Pedro Pacheco',
  'Gabriel Pascual',
  'Dhyey Patel',
  'Karan Patel',
  'Manthan Patel',
  'Rutvi Jatinkumar Patel',
  'Shiv Patel',
  'Vashu Patel',
  'Neel Patil',
  'Arij Qureshi',
  'Casey Regetz',
  'Shriya Shah',
  'Neha Shirwalker',
  'Akashdeep Singh',
  'Jaspreet Singh',
  'Jemil Srejic',
  'Ritika Suresh',
  'Kevyn Thompson',
  'Sean Ulep',
  'Sai Vedagiri',
  'Namitha Yalla',
]

// The function uses recursion to prevent returning the same name twice in a row.
// Because of the above, it's not truly random. Just sayin'.
const getRandomName = (name) => {
  const choice = Math.floor(Math.random() * names.length)
  return names[choice] === name ? getRandomName(name) : names[choice]
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
    }, 750)
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
          borderColor={'gray.100'}
          // boxShadow={'md'}
          margin={'10'}
          // bg={'gray.50'}
        >
          <ScaleFade initialScale={0.25} in={true}>
            <Text fontSize={72}>{name}</Text>
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
