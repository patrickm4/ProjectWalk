//update the state variable
const pageDefault = {
  page:1,
  centralPage:99
};

export function Page(state = pageDefault, action){
  let obj = Object.assign({}, state);

  switch(action.type) {
    case "CHANGE_PAGE":
      obj.page = action.curpage;
      return obj;
    case "CHANGE_DISPLAY":
      obj.centralPage = action.curdisplay;
      return obj;
    default:
      return state;
  }

}
