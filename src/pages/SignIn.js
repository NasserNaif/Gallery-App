import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"

function SignIn() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const Navigate = useNavigate()

    const onChangeFunc = (e) => {

        setUser(prev => ({
            ...prev,
            [e.target.name]: [e.target.value]
        }))
    }

    const onClickFunc = () => {
        if (user.username.length === 0 || user.password.length === 0) {
            alert("you have to input username & password")
        } else
            Navigate("/Gallery")
    }

    return (

        <Flex boxShadow={" 0 0 30px "} m={"5% 5%"} justify={""} bg={""} alignItems={"center"} h={"700"} borderRadius={15}>
            <Box bg={"blue.600"} h={"100%"} w={"40%"}>

            </Box>

            <Flex alignItems={"center"} justify={"center"} bg={"gray.300"} direction={"column"} gap={8} w={"100%"} h={"100%"}>
                <Text textShadow={"0 0 20px black"} fontSize={"4xl"}>Sign In</Text>
                <Input bg={""} w={"60%"} name='password' placeholder={"password"} onChange={onChangeFunc} />
                <Input bg={""} w={"60%"} name={"username"} placeholder='username' onChange={onChangeFunc} />
                <Button bg={"blue.400"} w={"60%"} onClick={onClickFunc}>Gallery</Button>
            </Flex>



        </Flex>
    )
}

export default SignIn