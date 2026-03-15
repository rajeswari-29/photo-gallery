export const favouriteReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAV":
      const exists = state.includes(action.payload);

      if (exists) {
        const updated = state.filter((id) => id !== action.payload);
        localStorage.setItem("favourites", JSON.stringify(updated));
        return updated;
      } else {
        const updated = [...state, action.payload];
        localStorage.setItem("favourites", JSON.stringify(updated));
        return updated;
      }

    default:
      return state;
  }
};