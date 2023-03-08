import React, {useContext} from 'react'
import { FormattedHTMLMessage as IntlFormattedHTMLMessage } from 'react-intl'
import { FormattedMessage as IntlFormattedMessage } from 'react-intl'

import { separateJapaneseWords } from '../../../lib/separateJapaneseWords'
import { LanguageContext } from '../../../contexts/LanguageContext'

export const translationMiddleware = (string, language) => {
    if (language === 'ja') {
        return (
            <span
                className='text-wrap'
                dangerouslySetInnerHTML={{__html: separateJapaneseWords(string)}}
            />
        )
    }

    return <span dangerouslySetInnerHTML={{__html: string}}/>
}

export const FormattedHTMLMessage = props => {
    const {language} = useContext(LanguageContext)
    return (
        <IntlFormattedHTMLMessage
            {...props}
            children={(string) => translationMiddleware(string, language)}
        />
    )
    // return null
}

export const FormattedMessage = props => (
    <IntlFormattedMessage {...props} />
)

