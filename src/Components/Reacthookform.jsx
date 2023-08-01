import { Box, Button, Container, FormControl, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"


const Reacthookform = () => {

  const form =  useForm({
   
    defaultValues : {
        username : '',
        email : '',
        password : '',
        phoneList : ["", "", ""],
        social : {
            facebook : '',
            twitter : '',
        },
        age : 0,
        postCode :0,
        date : new Date(),
        chanel : '',

    }
        
  })


  const {register, control, handleSubmit, formState : {errors}, watch, setValue} = form;



  const formSubmit = (data) => {
    
    console.log(data);
  }

  const submitError = ( errors) => {

    console.log('form errors', (errors));
  }


  const handelSetSubmit = () => {
        setValue("username","")
  }
  
  const watchUserName = watch('username')

    return (
        <Container 
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" 
        >
            <Box display='flex' justifyContent='center' alignItems='center' gap='1rem' textAlign='center' flexDirection='column' margin= '1rem 0'>
            <Typography variant="h3" color='primary' gutterBottom>React form hook</Typography>
            <Typography variant='h6' color='secondary' >Account Name : {watchUserName.toUpperCase()}</Typography>
            </Box>

        <Box 
         display="flex"
         justifyContent="center"
         alignItems="center"
         height="100%" 
         width = '100%'
         flexDirection='column'
         gap={2}
         >
           
        
        <form onSubmit={handleSubmit(formSubmit, submitError)}>
            <Box  display="flex"
         justifyContent="center"
         alignItems="center"
         height="100%" 
         width='100%'
         flexDirection='column'
         gap='1rem'>


            <FormControl sx={{width : '460px'}}>
                <TextField type="text"
                 variant="outlined"
                  label='UserName'
                  error={!errors.username}
                  helperText={errors.username?.message}
                   {...register("username", {
                    required : {
                        value : true,
                        message : 'username is required'
                    }
                    
                   })} />

            </FormControl>

            <FormControl sx={{width : '460px'}}>
                <TextField type="email"
                 variant="outlined"
                  label='Email'
                  error={!!errors.email}
                  helperText={errors.email?.message}
                   {...register("email", {
                    required : {
                        value :/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ,
                        message : 'email is invalid'
                    }
                   })} />
            </FormControl>

            <FormControl sx={{width : '460px'}}>
                <TextField type="password" 
                variant="outlined" 
                label='Password'
                error={!!errors.password}
                helperText={errors.password?.message}
                 {...register("password", {
                    required : {
                        value : true,
                        message : 'password is required'
                    }
                 })} />
                 
            </FormControl>

           
                <Box display='flex' justifyContent='center' width='100%' gap='1rem'>

                    <FormControl sx={{width : '140px'}}>
                        <TextField 
                        type="text" 
                        variant="outlined" 
                        label='postcode'
                        {...register("phoneList.0")}
                        />
                    </FormControl>

                    <FormControl sx={{width : '140px'}}>
                        <TextField 
                        type="text" 
                        variant="outlined" 
                        label='housenumber'
                        {...register("phoneList.1")}
                        />
                    </FormControl>

                    <FormControl sx={{width : '140px'}}>
                        <TextField 
                        type="text" 
                        variant="outlined" 
                        label='roadnumber'
                        {...register("phoneList.2")}
                        />
                    </FormControl>

                </Box>

                <Box gap='2rem' display='flex'>
                    <FormControl sx={{width : '210px'}}>
                        <TextField  type="text" 
                        variant="outlined" 
                        label='facebook'
                        {...register("social.facebook")} />
                    </FormControl>

                    <FormControl sx={{width : '210px'}}>
                        <TextField  type="text" 
                        variant="outlined" 
                        label='Twitter'
                        {...register("social.twitter")} />
                    </FormControl>
                </Box>

                <Box width='100%' display='flex' gap ='2rem'>

                    <FormControl sx={{width : '210px'}}>
                        <TextField variant="outlined" type="number"  {...register("age", {
                            valueAsNumber : true,
                            
                            required : {
                                value : true,
                                message : 'age is required',
                                
                                
                            }
                        })}
                        error={!!errors.age}
                        helperText={errors.age?.message}
                        
                        
                        />
                    </FormControl>

                <FormControl sx={{width : '210px'}}>
                    <TextField variant="outlined" type="text" {...register("postCode", {
                        
                        required : {
                            value : true,
                            message : 'postcode is required'
                        }
                    })}
                   
                    error={!!errors.postCode}
                    helperText={errors.postCode?.message}
                    
                    />
                </FormControl>

                </Box>

                
                <Box display='flex' gap= '2rem'>
                <FormControl sx={{width : '210px'}}>
                    <TextField type="date"
                
                    {...register("date", {
                        required : {
                            value : true,
                            message : 'date-of-birth is required'
                        }
                    })} 
                    helperText={errors.date?.message}
                    />
                </FormControl>

                <FormControl sx={{width : '210px'}}>
                    <TextField type="date"
                  
                    {...register("date", {
                        required : {
                            value : true,
                            message : 'date-of-birth is required'
                        }
                    })} 
                    helperText={errors.date?.message}
                    />
                </FormControl>

                </Box>
               

                

                <FormControl sx={{width : "100%"}}>
                    <TextField label='chanel' variant="outlined" {...register("chanel", {
                        disabled : watch("username") === ""
                    })} />
                </FormControl>
          

       
          


            </Box>

            <Stack component='div' margin='1rem 0'>
                <Button type="submit" variant="contained" size="large" onClick={handelSetSubmit}>Submit here</Button>
            </Stack>

        </form>


        <DevTool control={control} />

        </Box>
        </Container>
    )
}


export default Reacthookform;