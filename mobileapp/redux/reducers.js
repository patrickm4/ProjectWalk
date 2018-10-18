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

//for storing global background color state variable
const bgDefault = {
  bgcolor:"#FFFFFF"
}

export function Background(state = bgDefault, action){
  let obj = Object.assign({}, state);

  switch(action.type) {
    case "CHANGE_BG":
    //same as setState
      obj.bgcolor = action.bgcolor;
      return obj;
    default:
      return state;
  }
}
