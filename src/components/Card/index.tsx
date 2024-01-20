import { Container, Title } from "./styles";

interface Props {
  title: string;
  handleSelect: (index: number) => void;
  itemIndex: number;
}

export function Card({ title,  handleSelect, itemIndex }: Props) {
  return (
    <Container onClick={() => handleSelect(itemIndex)}>
      <Title>{title}</Title>
    </Container>
  );
}
