import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Section6 = () => {
  return (
    <div className=' px-3 flex flex-col md:flex-row justify-center gap-4 md:gap-16  items-center top-0 w-full  bg-card lg:px-26'>
        <div className='bg-card text-white overflow-hidden relative text-start p-12 md:p-10 md:pt-8 md:pb-8 lg:pt-16 lg:pb-16 md:pr-2 rounded-lg items-center'>
            <Card className="w-full max-w-sm">
            <CardContent>
                <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2 text-primary">
                        <Input
                            id="URL"
                            type="Url"
                            placeholder="paste URL here"
                            required
                        />
                    </div>
                    <div className="grid">
                        <div className="flex items-center gap-2">
                            <Input id="texxt" type="text" placeholder="Choose domain" required />
                            <Input id="text" type="text" placeholder="Type alias here" required />
                        </div>
                    </div>
                </div>
                </form>
            </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full text-white">
                    Trim URL
                    </Button>
                </CardFooter>
                <CardHeader>
                    <CardDescription>
                    By clicking "Trim URL", i have agreed to the <a href="#" className="text-primary font-bold">Terms of Service, </a><a href="#" className="text-primary font-bold">Privacy Policy</a> and Use of Cookies.
                    </CardDescription>
            </CardHeader>
            </Card>
        </div>
    </div>
  )
}

export default Section6