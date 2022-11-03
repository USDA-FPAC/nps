
const SEARCH_PAYMENTS_INLINE_URL = '/api/nps-search-payments-inline.json';
const SEARCH_PAYMENTS_PAGE_LEVEL_URL = '/api/nps-search-payments-page-level.json';
const HEADERS = new Headers();
HEADERS.append(
  "Authorization",
  "api_key"
);
const createRequest = (searchType) => {
  let url = '';
  switch(searchType){
    case 'payments-page-level':
      url = SEARCH_PAYMENTS_PAGE_LEVEL_URL;
      break;
    case 'payments-inline':
      url = SEARCH_PAYMENTS_INLINE_URL;
    default:
      url = SEARCH_PAYMENTS_INLINE_URL;
      break;
  }

  return new Request( url,
    {
      method: "GET",
      //HEADERS,
      mode: "cors",
      cache: "default"
    }
  );
};

export const searchService = {
  
  isLoaded: false,

  getResults: async (payload, callback) => {
    let REQ = createRequest(payload.type);
    const response = await fetch(REQ);
    try{
      let res = await response.json();
      searchService.requestNext( res, callback, 'getResults' ); 
    } catch(e){
      console.log( 'getResults' + ' Search SERVICE ERROR', e)
    }
    
  },

  requestNext: (res, callback, methodCalled) => {
    if(res.errors){
      callback({ status: false, errors: res.error });
    } else {
      callback({ status: true, data: res });
    }
  }
  
}