"use client"
import React from 'react'
import * as popover from "@radix-ui/react-popover"
const Popover = () => {
  return (
    <popover.Root>
        <popover.Trigger>open file</popover.Trigger>
        <popover.Portal>
            <popover.Content>
                <h1 className='bg-red-300'>Bilal</h1>
                <h1>Bilal</h1>
                <h1>Bilal</h1>
                <h1>Bilal</h1>
                <h1>Bilal</h1>
            </popover.Content>
        </popover.Portal>
    </popover.Root>
  )
}

export default Popover