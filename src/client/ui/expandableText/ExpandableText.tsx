import React, {useState} from 'react'
import {Button, Stack, Typography} from '@mui/material'


export const ExpandableText = ({
                            text,
                            limit = 100,
                        }: {
    text: string
    limit?: number
}) => {
    
    const [expanded, setExpanded] = useState(false)
    
    const isLongText = text.length > limit
    const displayedText = !expanded && isLongText ? text.slice(0, limit) + '…' : text
    
    return (
        <Stack
            spacing={1}
        >
            
            <Typography
                variant="body1"
            >
                {displayedText}
            </Typography>
            
            {isLongText &&
                <Button size="small" onClick={() => setExpanded(prev => !prev)}>
                    {expanded ? 'Сховати' : 'Показати більше'}
                </Button>
            }
        </Stack>
    )
}

