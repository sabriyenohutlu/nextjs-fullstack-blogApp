import useSWR from "swr";

const FetchApi = async () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/todos", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data)

  // render data
  return <div>hello {data.name}!</div>;
};

export default FetchApi;
