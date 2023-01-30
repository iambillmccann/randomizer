import { Center, Box } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box>
        <Center>Bill McCann</Center>
      </Box>
    </>
  )
}

export default HomePage
