import { createContext, useReducer } from "react";
import {
	ActionProps,
	PropsState,
	initialState,
	reducer,
} from "./portalReducer";

export const PortalState = createContext<null | PropsState>(null);
export const PortalDispatch = createContext<React.Dispatch<ActionProps>>(
	() => {},
);

export const PortalContextProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<PortalState.Provider value={state}>
			<PortalDispatch.Provider value={dispatch}>
				{children}
			</PortalDispatch.Provider>
		</PortalState.Provider>
	);
};
