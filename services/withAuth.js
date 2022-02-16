import cookies from "next-cookies";
import axios from "axios";

export async function protectPage(ctx) {
  const token = cookies(ctx).token;
  if (token) {
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
export async function protectMainHall(ctx) {
  const token = cookies(ctx).token;
  if (token) {
    try {
      const res = await axios.get(process.env.BASE_URL + "/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      let datavideo1 = false;
      let datavideo2 = false;
      if (
        (res.data.data.reg_type === "Pameran dan Simposium" ||
          res.data.data.reg_type === "Pameran, Simposium dan Workshop") &&
        res.data.data.paid == true
      ) {
        datavideo1 = true;
      }
      if (
        res.data.data.reg_type === "Pameran, Simposium dan Workshop" &&
        res.data.data.paid == true
      ) {
        datavideo2 = true;
      }
      return {
        props: {
          jenis_peserta: res.data.data.reg_type,
          token,
          datavideo1,
          name: res.data.data.name,
        },
      };
    } catch (err) {
      console.log(err);
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
