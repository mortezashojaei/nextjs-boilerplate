import { InferGetServerSidePropsType } from "next";

type Data = { items: Array<number> };

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://run.mocky.io/v3/5dca93b3-dc94-416d-a132-2ecac774b4d9"
  );
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <ul>
        {data.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
