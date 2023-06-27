import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Profile } from "@/data/types";
import Nav from "@/components/Nav";

const CSR = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Profile[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("/api/profiles")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Client Side data fetching</title>
        <meta
          name="description"
          content="Data will be fetched and rendered on client side"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Client Side data fetching</h1>
        <Nav />
        {isLoading && <div>Loading...</div>}
        {data.map((obj) => (
          <div
            key={obj.id}
            style={{
              marginBottom: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "solid",
              textAlign: "center",
            }}
          >
            <Image
              alt={obj.first_name}
              src={obj.profile_pic}
              width={200}
              height={200}
              style={{ borderRadius: 100 }}
            />
            <p>
              {obj.first_name} {obj.last_name}
            </p>
          </div>
        ))}
      </main>
    </>
  );
};

export default CSR;
