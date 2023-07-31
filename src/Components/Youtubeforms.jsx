import React from "react";

import {Stack, Box, Typography, FormControl} from "@mui/material"
const Youtubeforms = () => {

    return (
        <Stack display='flex' justifyContent='center' alignItems='center' margin='2rem 0'>
            <Typography variant="h3" color='secondary'>React Hook Forms</Typography>

            <Stack display='flex' flexDirection='column'>
            <form style={{display : 'flex', flexDirection : 'column', margin : '3rem 0'}}>
                <label htmlFor="username">User Name</label>

                <input type="text" id="usernames" name="username" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="chanel">Chanel</label>
                <input type="text" id="chanel" name="chanel" />

                <button type="submit">Submit</button>
            </form>
            </Stack>
        </Stack>
    )
}

export default Youtubeforms;