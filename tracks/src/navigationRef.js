// Navigators are declared but hard to get access to, it's only accessible for react Components.
// This implementation provides access to navigator for everyone to use. 

import { NavigationActions } from 'react-navigation'

let navigator

export const setNavigator = nav => {
    navigator = nav
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}