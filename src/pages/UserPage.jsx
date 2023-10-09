import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={223} replies={102} postImg="/post1.png" postTitle="Let's talk about threads."/>
      <UserPost likes={321} replies={244} postImg="/post2.png" postTitle="Nice tutorial."/>
      <UserPost likes={45} replies={10} postImg="/post3.png" postTitle="I love this guy."/>
      <UserPost likes={543} replies={243} postTitle="This is my first threads."/>
    </>
  )
}

export default UserPage
