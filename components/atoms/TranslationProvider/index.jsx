import React, { useContext } from 'react'
import { IntlProvider } from "react-intl"

import { LanguageContext } from '../../../contexts/LanguageContext'
import commonTranslations from '../../../i18n/translations/index'

export const TranslationProvider = ({ translations = {}, children }) => {
	const { language } = useContext(LanguageContext)

	const commonMessages = commonTranslations[language] || commonTranslations['en']
	const providedMessages = translations[language] || translations['en']

	return (
		<IntlProvider
			locale='en'
			messages={{ ...commonMessages, ...providedMessages }}
		>
			{children}
		</IntlProvider>
	)
}
