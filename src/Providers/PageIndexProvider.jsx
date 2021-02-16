import React, {createContext, useState} from 'react';

export const PageIndexContext = createContext();

export const PageIndexProvider = (props) => {
    const [pageIndex, setNewPageIndex] = useState(3);

    return (<PageIndexContext.Provider value={
        [pageIndex, setNewPageIndex]
    }> {
        props.children
    } </PageIndexContext.Provider>);
}
