import React from "react";

import {useForm} from "react-hook-form"
import {Stack, Typography} from "@mui/material"
import axios from "axios"

import {DevTool} from "@hookform/devtools"


const Youtubeforms = () => {

     const form  =  useForm({
        defaultValues : async () => {
           const response = await axios.get('https://jsonplaceholder.typicode.com/users/3')
           const data = await response.data

            return {
                username : 'kafi Ahmed',
                email : data.email,
                chanel : 'codewar',
                social : {
                    twitter : '',
                    facebook : ''
                },
                phoneNumbers : ["", ""]

            }
        }
     })
     const {register, control, handleSubmit, formState} = form;

     const {errors} = formState

     const formSubmit = (data) => {

        console.log(data);
     }


    return (
        <Stack display='flex' justifyContent='center' alignItems='center' margin='2rem 0'>
            <Typography variant="h3" color='secondary'>React Hook Forms </Typography>

            <Stack display='flex' flexDirection='column'>
            <form noValidate onSubmit={handleSubmit(formSubmit)} style={{display : 'flex', flexDirection : 'column', margin : '3rem 0'}}>
                
                <Stack>
                <label htmlFor="username">User Name</label>

                <input type="text" id="usernames" {...register("username", {
                    required : {
                        value : true,
                        message : 'username is required'
                    }
                })}  />
                <p>{errors.username?.message}</p>
                </Stack>


                
                <Stack>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email", {
                    required : {
                        value : 
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message : 'invalid email format'

                    }
                })} />
                <p>{errors.email?.message}</p>
                </Stack>



                <Stack>
                <label htmlFor="chanel">Chanel</label>
                <input type="text" id="chanel" {...register("chanel", {
                    required : {
                        value : true,
                        message : 'chanel name is required'
                    }
                })} />
                <p>{errors.chanel?.message}</p>
                </Stack>

                <Stack>
                    <label htmlFor="twitter" id="twitterLabel">Twitter</label>
                    <input type="text" id="twitterInput" {...register('social.twitter')} />
                </Stack>

                <Stack>
                    
                    <label htmlFor="facebook" id="facebookLabel">Facebook</label>
                    <input type="text" id="facebookInput" {...register('social.facebook')} />
                </Stack>

                <Stack>
                    
                    <label htmlFor="proneNumber" id="PhoneNumber1">Phone Number</label>
                    <input type="text" id="phonenumber1_input" {...register('phoneNumbers.0')} />
                </Stack>

                <Stack>
                    
                    <label htmlFor="proneNumber" id="PhoneNumber2">Personal Number</label>
                    <input type="text" id="phonenumber2_input" {...register('phoneNumbers.1')} />
                </Stack>

                <button type="submit">Submit</button>
            </form>
            <DevTool control={control} />
            </Stack>
        </Stack>
    )
}

export default Youtubeforms;