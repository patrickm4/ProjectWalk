//update the state variable
const pageDefault = {
  page:1
};

export function Page(state = pageDefault, action){
  let obj = Object.assign({}, state);

  switch(action.type) {
    case "CHANGE_PAGE":
    //same as setState
      obj.page = action.curpage;
      return obj;
    default:
      return state;
  }
}
