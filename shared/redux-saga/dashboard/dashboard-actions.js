export const getDashboardDataDemo = () => ({
  type: 'GET_DASHBOARD_DATA_DEMO',
});

export const getListCategorySupportSuccess = data => ({
  type: 'GET_DASHBOARD_DATA_DEMO_SUCCESS',
  payload: data,
});

export const getListCategorySupportError = error => ({
  type: 'GET_DASHBOARD_DATA_DEMO_SUCCESS_ERROR',
  payload: error,
});

export const getVotes = payload => ({
  type: 'GET_VOTES',
  payload,
});

export const getVotesSuccess = data => ({
  type: 'GET_VOTES_SUCCESS',
  payload: data,
});

export const getVotesError = error => ({
  type: 'GET_VOTES_ERROR',
  payload: error,
});

export const getVoteDetail = payload => ({
  type: 'GET_VOTE_DETAIL',
  payload,
});

export const getVoteDetailSuccess = data => ({
  type: 'GET_VOTE_DETAIL_SUCCESS',
  payload: data,
});

export const getVoteDetailError = error => ({
  type: 'GET_VOTE_DETAIL_ERROR',
  payload: error,
});

export const recordVote = (payload, callback) => ({
  type: 'RECORD_VOTE',
  payload,
  callback,
});

export const recordVoteSuccess = data => ({
  type: 'RECORD_VOTE_SUCCESS',
  payload: data,
});

export const recordVoteError = error => ({
  type: 'RECORD_VOTE_ERROR',
  payload: error,
});
