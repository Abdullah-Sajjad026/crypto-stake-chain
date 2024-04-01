import axios from "axios";

export const checkAllowance = async (token: string, walletAddress: string) => {
  const targetUrl = `https://api.1inch.dev/swap/v6.0/tokens`;

  const config = {
    headers: {
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_ONE_INCH_KEY}`,
      "Content-Type": "application/json",
      "Target-Url": targetUrl
    },
    params: {
      tokenAddress: token,
      walletAddress: walletAddress
    }
  };

  const response = await axios.get("http://localhost:8000", config);
  return response.data;
}


// const _actions = {
//   checkAllowance
// }
// export default _actions;
