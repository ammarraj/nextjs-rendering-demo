import Head from "next/head";
import data from "@/data/fake-data.json";
import Image from "next/image";
import Nav from "@/components/Nav";

export const getServerSideProps = () => {
  const chars = "ABCDEFGHIJKLMMNOPQRSTUVXYZ";
  const randomStringArr = [];
  for (let i = 0; i < 20; i++) {
    randomStringArr.push(
      chars[parseInt((Math.random() * chars.length).toString(), 10)]
    );
  }

  return {
    props: {
      customContent: randomStringArr.join(""),
    },
  };
};

const SSR = ({ customContent }: { customContent: string }) => {
  return (
    <>
      <Head>
        <title>Server Side Rendering</title>
        <meta name="description" content="Pages will be rendered server side" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Server Side Rendering</h1>
        <Nav />
        <div style={{ marginBottom: 20 }}>
          Random string: {customContent} (Page is rebuilt on each request)
        </div>
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

export default SSR;
