import React from "react";

import {useForm} from "react-hook-form"
import {Stack, Typography} from "@mui/material"

import {DevTool} from "@hookform/devtools"


const Youtubeforms = () => {

     const form  =  useForm()
     const {register, control, handleSubmit} = form;

     const formSubmit = (data) => {

        console.log(data);
     }


    return (
        <Stack display='flex' justifyContent='center' alignItems='center' margin='2rem 0'>
            <Typography variant="h3" color='secondary'>React Hook Forms </Typography>

            <Stack display='flex' flexDirection='column'>
            <form onSubmit={handleSubmit(formSubmit)} style={{display : 'flex', flexDirection : 'column', margin : '3rem 0'}}>
                <label htmlFor="username">User Name</label>

                <input type="text" id="usernames" {...register("username")} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="chanel">Chanel</label>
                <input type="text" id="chanel" {...register("chanel")} />

                <button type="submit">Submit</button>
            </form>
            <DevTool control={control} />
            </Stack>
        </Stack>
    )
}

export default Youtubeforms;