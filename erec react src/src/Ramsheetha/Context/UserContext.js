import React from "react";

const UserContext = React.createContext()

const Userprovider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export{Userprovider,UserConsumer}