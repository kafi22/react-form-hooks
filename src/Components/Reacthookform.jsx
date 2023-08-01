import { Box, Button, Container, FormControl, FormLabel, Stack, TextField, Typography } from "@mui/material";
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
        }

    }
        
  })


  const {register, control, handleSubmit, formState : {errors}} = form;



  const formSubmit = (data) => {

    
    console.log(data);
  }

    return (
        <Container 
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" 
        >
            <Box>
            <Typography variant="h3" color='primary' textAlign='center' margin='2rem 0' gutterBottom>React form hook</Typography>
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
           
        
        <form onSubmit={handleSubmit(formSubmit)}>
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

                <Box gap='1rem' display='flex'>
                    <FormControl sx={{width : '220px'}}>
                        <TextField  type="text" 
                        variant="outlined" 
                        label='facebook'
                        {...register("social.facebook")} />
                    </FormControl>

                    <FormControl sx={{width : '220px'}}>
                        <TextField  type="text" 
                        variant="outlined" 
                        label='Twitter'
                        {...register("social.twitter")} />
                    </FormControl>
                </Box>
          

       
          


            </Box>

            <Stack component='div' margin='1rem 0'>
                <Button type="submit" variant="contained" size="large">Submit here</Button>
            </Stack>

        </form>


        <DevTool control={control} />

        </Box>
        </Container>
    )
}


export default Reacthookform;