'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,

} from 'next-themes'

export function ThemeProvider({ children, ...props }) {
  console.log('props', props);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
