import LoadingCategoriesAction from './loadingcategories'
import LoadCategoriesAction from './loadcategories'
import { URL } from '../Containers/EnvVars'
export default function FetchCategoriesAction() {
  return (dispatch, getState) => {
      dispatch(LoadingCategoriesAction())
      fetch(`${URL}/api/v1/categories`,{headers: {Authorization: `Bearer ${getState().jwt}`}})
        .then(resp => resp.json())
        .then(data => {
          dispatch(LoadCategoriesAction(data))
      })
  }
}
