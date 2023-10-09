import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/Actions'
import Comment from '../components/Comment'

const PostPage = () => {

  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        {/* left side */}
        <Flex w={'full'} alignItems={'center'} gap={3}>
          <Avatar src='/zuck-avatar.png' name='Mark Zuckerberg' size={'md'} />
          <Flex>
            <Text size={'sm'} fontWeight={'bold'}>markzuckerberg</Text>
            <Image src='/verified.png' w={4} h={4} ml={4}/>
          </Flex>
        </Flex>

        {/* right side */}
        <Flex gap={4} alignItems={'center'}>
          <Text fontSize={'sm'} color={'gray.light'}>1d</Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let's talk about threads.</Text>
      <Box borderRadius={6} overflow={'hidden'} border={'1px solid gray.light'}>
        <Image src={'/post1.png'} w={'full'} />
      </Box>
      
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={'center'}>
        <Text fontSize={'sm'} color={'gray.light'}>232 replies</Text>
        <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
        <Text fontSize={'sm'} color={'gray.light'}>{200 + (liked ? 1 : 0)} likes</Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={'space-between'}>
        <Flex gap={2} alignItems={'center'}>
          <Text fontSize={'2xl'}>👋</Text>
          <Text color={'gray.light'}>Get the app to like, reply and post</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      <Comment 
        comment = "Looks really good"
        createdAt = "1d"
        username = "johndoe"
        likes = {100}
        userAvatar = "https://bit.ly/dan-abramov"
      />

      <Comment 
        comment = "Amazing"
        createdAt = "2d"
        username = "robinhood"
        likes = {125}
        userAvatar = "https://bit.ly/code-beast"
      />

      <Comment 
        comment = "Fantastic"
        createdAt = "3d"
        username = "smithdok"
        likes = {56}
        userAvatar = "https://bit.ly/sage-adebayo"
      />
    </>
  )
}

export default PostPage
