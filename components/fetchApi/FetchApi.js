"use client";
//import useSWR from "swr";

const FetchApi = () => {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/todos",
  //   fetcher
  // );

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  // console.log(data);

  // render data
  return (
    <div>
      {/* {data.map((item, idx) => (
        <div
          style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent:"center",
            gap:".5rem"
          }}
          key={idx}
        >
          <div>{item.title}</div>
          <div>{item.completed}</div>
        </div>
      ))} */}
      <div>fetch</div>
    </div>
  );
};

export default FetchApi;
