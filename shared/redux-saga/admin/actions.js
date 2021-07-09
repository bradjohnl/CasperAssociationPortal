export const getListMembers = (payload, callback) => ({
  type: 'GET_LIST_MEMBER',
  payload,
  callback,
});

export const getListMembersSuccess = data => ({
  type: 'GET_LIST_MEMBER_SUCCESS',
  payload: data,
});

export const getListMembersError = error => ({
  type: 'GET_LIST_MEMBER_ERROR',
  payload: error,
});

export const getUserDetail = data => ({
  type: 'GET_USER_DETAIL',
  payload: data,
});

export const getUserDetailSuccess = data => ({
  type: 'GET_USER_DETAIL_SUCCESS',
  payload: data,
});

export const getUserDetailError = error => ({
  type: 'GET_USER_DETAIL_ERROR',
  payload: error,
});

export const getUserKYCInfo = data => ({
  type: 'GET_USER_KYC_INFO',
  payload: data,
});

export const getUserKYCInfoSuccess = data => ({
  type: 'GET_USER_KYC_INFO_SUCCESS',
  payload: data,
});

export const getUserKYCInfoError = error => ({
  type: 'GET_USER_KYC_INFO_ERROR',
  payload: error,
});

export const approveKYC = data => ({
  type: 'APPROVE_KYC',
  payload: data,
});

export const denyKYC = data => ({
  type: 'DENY_KYC',
  payload: data,
});

export const getListIntake = (payload, successCb) => ({
  type: 'GET_LIST_INTAKE',
  payload,
  successCb,
});

export const getListVerifications = (payload, resolve) => ({
  type: 'GET_LIST_VERIFICATIONS',
  payload,
  resolve,
});

export const getListIntakeSuccess = data => ({
  type: 'GET_LIST_INTAKE_SUCCESS',
  payload: data,
});

export const getListIntakeError = error => ({
  type: 'GET_LIST_INTAKE_ERROR',
  payload: error,
});

export const getBallots = (payload, callback) => ({
  type: 'GET_BALLOTS',
  payload,
  callback,
});

export const getBallotDetail = (payload, callback) => ({
  type: 'GET_BALLOT_DETAIL',
  payload,
  callback,
});

export const getBallotVotes = (payload, callback) => ({
  type: 'GET_BALLOT_VOTES',
  payload,
  callback,
});

export const submitBallot = (payload, resolve, reject) => ({
  type: 'SUBMIT_BALLOT',
  payload,
  resolve,
  reject,
});

export const cancelBallot = (payload, callback) => ({
  type: 'CANCEL_BALLOT',
  payload,
  callback,
});

export const cancelBallotSuccess = data => ({
  type: 'CANCEL_BALLOT_SUCCESS',
  payload: data,
});

export const cancelBallotError = error => ({
  type: 'CANCEL_BALLOT_ERROR',
  payload: error,
});

export const approveUser = (payload, resolve, reject) => ({
  type: 'APPROVE_USER',
  payload,
  resolve,
  reject,
});

export const resetUser = (payload, resolve, reject) => ({
  type: 'RESET_USER',
  payload,
  resolve,
  reject,
});

export const banUser = (payload, resolve, reject) => ({
  type: 'BAN_USER',
  payload,
  resolve,
  reject,
});

export const getVerificationDetail = (payload, resolve) => ({
  type: 'GET_LIST_VERIFICATION_DETAIL',
  payload,
  resolve,
});
