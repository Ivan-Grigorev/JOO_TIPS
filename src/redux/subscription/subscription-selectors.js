export const selectRemainingTime = (state) =>
  state.subscription.data.remainingTime;

export const selectAccountType = (state) => state.subscription.data.type;

export const selectIsPremium = (state) => state.subscription.data.isPremium;