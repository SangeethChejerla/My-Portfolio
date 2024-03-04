'use client'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl';
import React from 'react'

type Props = {
  messages: AbstractIntlMessages
  locale: string
  children: React.ReactNode
}

export default function IntlProvider({ messages, locale, children }: Props) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  )
}