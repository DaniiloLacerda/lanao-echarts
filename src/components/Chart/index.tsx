import ReactEcharts from "echarts-for-react";
import { Container } from "./styles";
interface Props {
  options: any;
}
export function Chart({ options }: Props) {
  return (
    <Container>
      <ReactEcharts
        option={options}
        style={{ width: "80vw", height: "100vh", marginTop: "300px", margin: '10px' }}
      ></ReactEcharts>
    </Container>
  );
}
