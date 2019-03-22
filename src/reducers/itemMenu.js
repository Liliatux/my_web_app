const activeItem = (state = "home", action) => {
  switch (action.type) {
    case "ACTIVE_ITEM":
      return action.item;
    default:
      return state;
  }
};

export default activeItem;
