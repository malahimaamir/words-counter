import { useEffect, useState } from "react";
import SubmitContact from "../components/SubmitContact";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
import toast from "react-hot-toast";
import * as yup from "yup";


export default function Contact({ props }) {
  const [loader, setLoader] = useState(false);
  const [postData, setPostData] = useState(null);

  const fetchPostData = async () => {
    try {
      setLoader(true);
      console.log("Fetching post data.....");
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/posts/add`,
        {
          title: "I am in love with someone.",
          userId: 5,
        }
      );

      console.log(res);

      if (res?.status === 201 && res?.statusText === "Created") {
        console.log("Fetched done", res);
        setPostData(res?.data);
      }
    } catch (error) {
      toast.error("error fetching data");
    } finally {
      setLoader(false);
    }
  };

  const sendPostData = async (values) => {
    try {
      setLoader(true);
      console.log("sending post data.....");
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/posts/add`,
        {
          title: `${values.name} + rana g`,
          userId: 5,
        }
      );

      if (res?.status === 201 && res?.statusText === "Created") {
        console.log("Fetched done", res);
        toast.success('wowwwww!!! data sent with rana g')
        setPostData(res?.data);
      }
    } catch (error) {
      toast.error("error fetching data", error);
    } finally {
      setLoader(false);
    }
  };
 

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <>
      {loader ? (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      ) : (
        <div>
          <h1>this is submit page</h1>
          <SubmitContact sendPostData={sendPostData} postData={postData} />
        </div>
      )}
    </>
  );
}

// {
//     "id": 252,
//     "title": "I am in love with someone.",
//     "userId": 5

//   }
