import LoadingCategoriesAction from './loadingcategories'
import LoadCategoriesAction from './loadcategories'
export default function FetchCategoriesAction() {
  return (dispatch, getState) => {
      dispatch(LoadingCategoriesAction())
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/categories`,{headers: {Authorization: `Bearer ${getState().jwt}`}})
        .then(resp => resp.json())
        .then(data => {
          dispatch(LoadCategoriesAction(data))
      })
  }
}
