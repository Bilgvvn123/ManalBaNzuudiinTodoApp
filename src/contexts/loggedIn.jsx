import React, { createContext } from "react";

const initialState = {};

export const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
	const value = { name: "ganaa" };

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
