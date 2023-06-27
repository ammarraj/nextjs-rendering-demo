import Head from "next/head";
import data from "@/data/fake-data.json";
import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Static Site Rendering</title>
        <meta
          name="description"
          content="Static page, rendered at build time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Static Site Rendering</h1>
        <Nav />
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
}
