import React, { useEffect } from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'

const Index = () => {
	const { query } = useRouter()

	useEffect(() => {
		Router.push(`/en`)
	}, [query])

	return (
		<>
			<Head>
				<meta name="robots" content="noindex, nofollow" />
			</Head>
		</>
	)
}

export default Index