import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTest } from "./redux/test/action"

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.test)

  const page = 1;
  const perPage = 3;

  useEffect(() => {
    dispatch(getTest({
      page,
      perPage
    }));
  }, [dispatch, page, perPage]);

  return (
    <div>App</div>
  )
}

export default App
