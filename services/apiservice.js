import cookies from "next-cookies";
import axios from "axios";
import { protectPage } from "./withAuth";


export const getServerSideProps = async (context) => getFileSponsor(context);
export async function getFileSponsor(ctx) {
     protectPage(ctx);
    // console.log(data);
    const token = cookies(ctx).token;
    // console.log(data);

    // const res = await axios.get(process.env.BASE_URL + "/me", {
    //     headers: { Authorization: `Bearer ${token}` },
    // });

    return {
        props: {
            token:token?token:'',
            sponsor: 'tes'
        },
      };
  }
  
