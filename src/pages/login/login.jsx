import React from 'react'
import { Input } from '@chakra-ui/react'
import { Text, Button } from '@chakra-ui/react'

import './login.css'

function LoginPage() {
  return (
    <div className='bg-color'>
        <Text fontSize={30} color={'white'}>Login</Text>
        <br />
      <Input width={500} color={'white'} border={'1px solid white'} placeholder='E-mail'></Input>
      <br />
      <Input width={500} color={'white'} border={'1px solid white'} placeholder='Password'></Input>
      <br />
      <Button width={500}>Entrar</Button>
    </div>
  )
}

export default LoginPage