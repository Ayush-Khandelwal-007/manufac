import React from 'react'

const ProfileContext = React.createContext({})

const ContextProvider = ProfileContext.Provider;
const ContextConsumer = ProfileContext.Consumer;


export { ContextProvider, ContextConsumer }
export default ProfileContext