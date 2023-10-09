import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsThreeDots } from 'react-icons/bs'
import Actions from './Actions'

const UserPost = ({ likes, replies, postImg, postTitle }) => {

  const [liked, setLiked] = useState(false);

  return (
    <Link to={"/markzuckerberg/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
            <Avatar size={"md"} name='Mark Zuckerberg' src='/zuck-avatar.png' />
            <Box w='1px' h={'full'} bg={'gray.light'} my={2}></Box>
            <Box position={'relative'} w={'full'}>
                <Avatar 
                    size={'xs'}
                    name='John Doe'
                    src='https://bit.ly/dan-abramov'
                    position={'absolute'}
                    top={'0px'}
                    left={'12px'}
                    padding={'2px'}
                />
                <Avatar 
                    size={'xs'}
                    name='Amith Shit'
                    src='https://bit.ly/sage-adebayo'
                    position={'absolute'}
                    bottom={'0px'}
                    right={'-1px'}
                    padding={'2px'}
                />
                <Avatar 
                    size={'xs'}
                    name='Bil Gates'
                    src='https://bit.ly/prosper-baba'
                    position={'absolute'}
                    bottom={'0px'}
                    left={'0px'}
                    padding={'2px'}
                />
            </Box>
        </Flex>

        <Flex flex={1} flexDirection={'column'} gap={2}>
            <Flex justifyContent={'space-between'} w={'full'}>
                <Flex w={'full'} alignItems={'center'}>
                    <Text fontSize={'sm'} fontWeight={'bold'}>markzuckerberg</Text>
                    <Image src='/verified.png' w={4} h={4} ml={1} />
                </Flex>
                <Flex gap={4} alignItems={'center'}>
                    <Text fontStyle={"sm"} color={'gray.light'}>1d</Text>
                    <BsThreeDots />
                </Flex>
            </Flex>

            <Text fontSize={'sm'}>{postTitle}</Text>
            {postImg && (
                <Box borderRadius={6} overflow={'hidden'} border={'1px solid gray.light'}>
                    <Image src={postImg} w={'full'} />
                </Box>
            )}

            {/* Actions */}
            <Flex gap={3} my={1}>
                <Actions liked={liked} setLiked={setLiked} />
            </Flex>

            <Flex gap={3} alignItems={'center'}>
                <Text fontSize={'sm'} color={'gray.light'}>{replies} replies</Text>
                <Box borderRadius={'full'} w={0.5} h={0.5} bg={'gray.light'}></Box>
                <Text fontSize={'sm'} color={'gray.light'}>{likes} likes</Text>
            </Flex>
        </Flex>
      </Flex>
    </Link>
  )
}

export default UserPost
