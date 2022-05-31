import React, { useContext, createContext } from 'react'

export const createContextProvider = providerService => {
	const context = createContext(null)
	const Provider = ({ children }) => (
		<context.Provider value={providerService()}>{children}</context.Provider>
	)
	const inject = () => useContext(context)

	return {
		Provider,
		inject,
	}
}
