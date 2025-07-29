"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../src/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef((props, ref) => {
  const { className, ...rest } = props
  return (
    <label
      ref={ref}
      className={cn(labelVariants(), className)}
      {...rest}
    />
  )
})
Label.displayName = "Label"

export { Label }
