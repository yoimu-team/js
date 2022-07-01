import React from 'react'
import { createContext, useContextSelector } from 'use-context-selector'

const defaultGetter = e => e

export const createProvider = providerService => {
	const context = createContext(null)
	const Provider = ({ children }) => (
		<context.Provider value={providerService()}>{children}</context.Provider>
	)
	const inject = (getter = defaultGetter) => useContextSelector(context, getter)

	return {
		Provider,
		inject,
	}
}
