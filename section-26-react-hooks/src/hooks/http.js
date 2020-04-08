import { useReducer, useCallback } from 'react';

const initialState = {
  loading: false, 
  error: null,
  data: null,
  extra: null,
  identifier: null
}

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SENT' :
      return { 
        loading: true, 
        error: null, 
        data: null, 
        extra: null, 
        identifier: action.identifier };
    case 'SUCCESS' :
      return { 
        ...currentHttpState, 
        loading: false, 
        data: action.responseData, 
        extra: action.extra };
    case 'FAIL' :
      return { 
        loading: false, 
        error: action.errorMessage };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Should not happen!');
  }
}

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const resetState = useCallback(() => dispatchHttp({type: 'RESET'}), []);

  const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
    dispatchHttp({type: 'SENT', identifier: reqIdentifier});
    fetch(url, 
      {
        method: method,
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
  })
    .then(response => {
      return response.json();
      })
      .then(responseData => {
        dispatchHttp({
          type: 'SUCCESS', 
          responseData: responseData, 
          extra: reqExtra });
      })
      .catch(error => {
        dispatchHttp({type: 'FAIL', errorMessage: 'Something went wrong! :('});
    });
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    resetState: resetState
  };
};

export default useHttp;