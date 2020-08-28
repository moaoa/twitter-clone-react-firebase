import React, { useEffect } from 'react';

function useTrackHook(param) {
    useEffect(() => {
        console.log(param);
    }, [param]);
}

export default useTrackHook;
