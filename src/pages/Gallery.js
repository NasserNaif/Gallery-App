import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom"
import axios from "axios"
import { Grid, Text, Image, Input, Button, Flex } from "@chakra-ui/react"

function Gallery() {
    const [photos, setPhotos] = useState([])
    const [search, setSearch] = useState("london")
    const clintId = "CkR_tstWOr4c_Tdx39_TpEXDy6jGlBpHpLckN11uE0I"

    const searchFunc = () => {
        axios.get(`https://api.unsplash.com/search/photos/?query=${search}&client_id=${clintId}`).then((res) => {
            setPhotos(res.data.results)
            console.log(res.data.results)
        })
    }

    return (
        <Grid gap={4} templateColumns={"repeat(3,1fr)"} gridTemplateRows={"repeat(3,20vh)"}>
            <Flex bg={"gray.200"} gridColumn={"1/4"} gridRow={"1/3"} gap={5} alignItems={"center"} justify={"center"} direction={"column"} >
                <Text fontSize={"4xl"} textShadow={"0 0 20px black"}>Search For Photos </Text>
                <Input bg={""} w={"40%"} type={"text"} placeholder={"Search"} onChange={(e) =>{
                    setSearch(e.target.value)
                }} />
                <Button onClick={searchFunc} bg={"blue.300"} w={"40%"}>Search</Button>
            </Flex>


            {photos.map((pic) => (
                <Image borderRadius={13}  h={180} w={250} key={pic.id} src={pic.urls.small} alt="" />
            ))}
        </Grid>
    )
}

export default Gallery


/*serch Api

https://api.unsplash.com/search/photos/?query=london&client_id=CkR_tstWOr4c_Tdx39_TpEXDy6jGlBpHpLckN11uE0I
*/

