import {  CheckCircle, CopyAll } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

export const CopyToClipboardButton = ({text}) => {

    const [copied, setCopied] = React.useState(false)

    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea")
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
            document.execCommand('copy')
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err)
        }
        document.body.removeChild(textArea)
    }


    const copyToClipboard = () => {
        // old browser compatibility
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text)
        } else {
            navigator.clipboard.writeText(text)
        }
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }
        , 1000)
    }

  return (
    <IconButton onClick={copyToClipboard}>
        {
            copied ? <CheckCircle sx={{color: 'success.main'}}/> : <CopyAll/>
        }
    </IconButton>
  )
}
