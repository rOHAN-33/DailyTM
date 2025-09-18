"use client"

import { userSchema } from '@/lib/schema'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import z, { date } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { FormInput } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { countryList } from '@/utils/countriesList'
import { startOfDay } from 'date-fns'
import { industryTypesList, roleList } from '@/utils'
import { Textarea } from './ui/textarea'




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
                          <FormLabel>Country</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
    <SelectTrigger className="w-64 bg-white border rounded-lg px-3 py-2 text-black">
      <SelectValue placeholder="Select Country" />
    </SelectTrigger>
  </FormControl>

  <SelectContent className="w-64 bg-white rounded-lg shadow-lg">
    {countryList.map((country) => (
      <SelectItem
        key={country.code}
        value={country.name}
        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
      >
        <img
          src={country.flag}
          alt={country.name}
          className="w-6 h-4 object-cover rounded-sm"
        />
        <span className="text-black">{country.name}</span>
      </SelectItem>
    ))}
  </SelectContent>
</Select>

                          <FormMessage></FormMessage>
                        </FormItem>
                      )
                      }
                    >

                    </FormField>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <FormField
                      control={form.control}
                      name='Industry Type'
                      render={({field} )=>(
                        <FormItem>
                          <FormLabel>Industry Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
    <SelectTrigger className="w-64 bg-white border rounded-lg px-3 py-2 text-black">
      <SelectValue placeholder="Select IndustryType" />
    </SelectTrigger>
  </FormControl>

  <SelectContent className="w-64 bg-white rounded-lg shadow-lg text-black">
    {industryTypesList.map((industry) => (
      <SelectItem
        key={industry}
        value={industry}
        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {industry}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

                          <FormMessage></FormMessage>
                        </FormItem>
                      )
                      }
                    >

                    </FormField>
                    </div>
                     
                    <FormField
                      control={form.control}
                      name='Industry Type'
                      render={({field} )=>(
                        <FormItem>
                          <FormLabel>Role at Organisation</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
    <SelectTrigger className="w-64 bg-white border rounded-lg px-3 py-2 text-black">
      <SelectValue placeholder="Select Role" />
    </SelectTrigger>
  </FormControl>

  <SelectContent className="w-64 bg-white rounded-lg shadow-lg text-black">
    {roleList.map((industry) => (
      <SelectItem
        key={industry}
        value={industry}
        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {industry}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

                          <FormMessage></FormMessage>
                        </FormItem>
                      )
                      }
                    >

                    </FormField>

                    <FormField 
                      control={form.control}
                      name='about'
                      render={({field})=>(
                        <FormItem>
                          <FormLabel>Tell Us About Your Self</FormLabel>
                          <FormControl>
                            <Textarea {...field} placeholder='tell us about your self' className='resize-none'>

                            </Textarea>
                          </FormControl>
                        </FormItem>
                      )}
                      >

                    </FormField>
                    <Button type='submit' disabled={pending} className='cursor-pointer bg-black text-white'>Submit</Button>
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


