export const selectRemainingTime = (state) =>
  state.subscription.data.remainingTime;

export const selectAccountType = (state) => state.subscription.data.type;

export const selectIsPremium = (state) => {
  console.log(state.subscription.data.isPremium);
  console.log(state.subscription.data);
  return  state.subscription.data.isPremium;
};
