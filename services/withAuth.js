import cookies from "next-cookies";
import axios from "axios";

export async function protectPage(ctx) {
  const token = cookies(ctx).token;
  if (token) {
    // const data = await fetch(process.env.BASE_URL+'/me', {
    //  method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // if(data.status===401){
    //   return {
    //     redirect: {
    //       destination: process.env.REDIRECT_LOGIN,
    //       permanent: false,
    //     },
    //   };
    // }else{
    //   return {
    //     props: {
    //       token,
    //     },
    //   };
    // }
    try {
      const res = await axios.get(process.env.BASE_URL + "/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return {
        props: {
          token,
          name: res.data.data.name,
        },
      };
    } catch (err) {
      return {
        redirect: {
          destination: process.env.REDIRECT_LOGIN,
          permanent: false,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: process.env.REDIRECT_LOGIN,
        permanent: false,
      },
    };
  }
}
/////////////////////////
export async function checkAuthWithRedirect(ctx, url) {
  const token = cookies(ctx).token;
  if (token) {
    return {
      token,
      redirect: {
        destination: url || "welcome",
        permanent: false,
      },
    };
  }
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}

/////////////////////////
export async function userAuthenticated(ctx) {
  const token = cookies(ctx).token;
  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
