import { useRouter } from 'next/dist/client/router'
import { ReactNode, useEffect } from 'react'
import { useState } from 'react'
import { LanguageContext } from "../contexts/LanguageContext"

interface Props {
    children?: ReactNode
    language: any
}

export const WithLanguage = ({children, ...props} : Props) => {
    const [language, setLanguage] = useState(props.language)
    const Router = useRouter()
    useEffect(() => {
        if (Router.query.language) {
            setLanguage(Router.query.language)
        }
    }, [Router.query.language])
    return 	<LanguageContext.Provider
    value={{
        language,
        setLanguage
    }}
>
    {children}
</LanguageContext.Provider>
}