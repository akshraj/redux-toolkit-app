import axios from 'axios';
import { useEffect } from 'react';
import { useGetPostsQuery } from './api/apiSlice';
import { useGetPeoplesQuery } from './api/apiSlice2';
import './App.css';


function App() {

  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get('http://localhost:4000/posts');
  //     console.log(res);
  //   })()
  // }, [])

  // const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery({ refetchOnMountOrArgChange: true });
  const { data, isLoading, isSuccess, isError, error } = useGetPeoplesQuery({ refetchOnMountOrArgChange: true });
  console.log({ data, isLoading, isSuccess, isError, error })
  return (
    <div className="App">

    </div>
  );
}

export default App;
