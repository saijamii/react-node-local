import { Drawer } from "antd";
import Lottie from "lottie-react";
import loading from "../Json/loading.json";

const Loading = (props) => {
  const { enableLoading } = props;
  return (
    <Drawer
      className="background-transparent"
      visible={enableLoading}
      closable={false}
      placement="top"
      width="100%"
      height="100%"
      size="large"
    >
      <div className="loading-div">
        <Lottie animationData={loading} style={{ marginTop: "-10px" }} />
        <h1 className="please-wait">Please wait..</h1>
      </div>
    </Drawer>
  );
};
export default Loading;
