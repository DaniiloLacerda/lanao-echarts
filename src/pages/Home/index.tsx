import { Card } from "../../components/Card";
import { Chart } from "../../components/Chart";
import { Container, Content, Header } from "./styles";
import { useState } from "react";
import * as options from "../../data";
import { ArrowLeftSquare } from "lucide-react";

type IResolverOptions = {
  title: string;
  option: any;
};

const resolver: IResolverOptions[] = [
  { title: options.option1.title.text, option: options.option1 },
  { title: options.option2.title.text, option: options.option2 },
  { title: options.option3.title.text, option: options.option3 },
  { title: options.option4.title.text, option: options.option4 },
  { title: options.option5.title.text, option: options.option5 },
  { title: options.option6.title.text, option: options.option6 },
  { title: options.option6b.title.text, option: options.option6b },
  { title: options.option7.title.text, option: options.option7 },
  { title: options.option8.title.text, option: options.option8 },
  { title: options.option9.title.text, option: options.option9 },
  { title: options.option10.title.text, option: options.option10 },
  { title: options.option11.title.text, option: options.option11 },
  { title: options.option12.title.text, option: options.option12 },
  { title: options.option13.title.text, option: options.option13 },
  { title: options.option14.title.text, option: options.option14 },
  { title: options.option15.title.text, option: options.option15 },
  { title: options.option16.title.text, option: options.option16 },
  { title: options.option17.title.text, option: options.option17 },
];

export function Home() {
  const [chartOptions, setChartOptions] = useState(null);
  const [showCards, setShowCards] = useState(true);

  function handleCardSelect(index: number) {
    setChartOptions(resolver[index].option);
    setShowCards(false);
  }
  function handleBack() {
    setChartOptions(null);
    setShowCards(true);
  }

  return (
    <Container>
      <Header>
        {!showCards && (
          <ArrowLeftSquare size={28} color="#232D42" onClick={handleBack} />
        )}
      </Header>
      <Content>
        {showCards &&
          resolver.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                handleSelect={handleCardSelect}
                itemIndex={ index }
              />
            );
          })}

        {chartOptions && <Chart options={chartOptions} />}
      </Content>
    </Container>
  );
}
