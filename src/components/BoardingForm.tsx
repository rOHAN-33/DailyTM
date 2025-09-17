"use client"

import { userSchema } from '@/lib/schema'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { FormInput } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'




interface props{
    name:string,
    email:string,
    image?:string
}

type UserDataType = z.infer<typeof userSchema>
const BoardingForm = ({name, email, image}:props) => {
    const[pending, setPending] = useState(false)


    const form = useForm<UserDataType>({
       resolver: zodResolver(userSchema),
       defaultValues:{
        about:"",
        name:name || "",
        email:email,
        image:image || "",
        roles:"",
        industryType:""
       }
    })

    const onSubmit = async(data: UserDataType) => {}
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      
          <Card className="w-100 shadow-xl rounded-2xl text-black">
            <CardHeader>
              <CardTitle className="text-xl">Welcome To DailyTM</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, eveniet?
              </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 w-80"
                  >
                    <FormField
                      control={form.control}
                      name='name'
                      render={({field} )=>(
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter full name' {...field} className='w-80'>
                            </Input>
                          </FormControl>
                          <FormMessage></FormMessage>
                        </FormItem>
                      )
                      }
                    >

                    </FormField>

                    <FormField
                      control={form.control}
                      name='name'
                      render={({field} )=>(
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                           
                          </FormControl>
                          <FormMessage></FormMessage>
                        </FormItem>
                      )
                      }
                    >

                    </FormField>
                    <Button type='submit' className='cursor-pointer bg-black text-white'>Submit</Button>
                    {/* <Button>Submit</Button> */}
                    {/* Add your form fields here */}
                  </form>
                </Form>
            </CardContent>

          </Card>
    </div>
  )
}

export default BoardingForm


