import { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";
import Loading from "../../../components/Loading";
import { TestCall } from "../../../lib/Api";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getStaticPaths: any = async () => {
  return {
    paths: [
      {
        params: {
          groupId: "1",
          beaconId: "1",
        },
      },
    ],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch data here for the pages according to the groupID and beaconID
  // We can create a custom Error page that will be statically available, when the content is not found
  // through error status returned from our BE
  const json = await TestCall();
  await sleep(3000);
  return {
    props: { json, params },

    // Re-generate the page at most per X seconds, if a request comes in
    revalidate: 10,
  };
};

const InfoTemplate = ({ params, json }): ReactElement => {
  const router = useRouter();
  console.log(params); //groupId, beaconId
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <>
      <h1>To be filled with content :-)</h1>
      <p>GroupId: {params?.groupId}</p>
      <p>BeaconId: {params?.beaconId}</p>
      <p>Current time in UNIX retrieved from API : {json?.unixtime}</p>
    </>
  );
};

export default InfoTemplate;
