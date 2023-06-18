import { MoonLoader } from "react-spinners";

const override= {
  display: "block",
  margin: "0 auto",
  marginTop:'40px',
  borderColor: "red",
};

export const Loader = () => (
<MoonLoader
  color="#0010f9"
  size={100}
  speedMultiplier={0.5}
  cssOverride={override}
/>
)