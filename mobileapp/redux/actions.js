//building functions to change the global state
export function ChangePage(page){
  return {
    type:"CHANGE_PAGE",
    curpage:page
  }
}
