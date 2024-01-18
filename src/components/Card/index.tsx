import { Container, Title } from "./styles";

interface Props {
  title: string;
  handleSelect: (alias: string) => void;
}

export function Card({ title,  handleSelect }: Props) {
  return (
    <Container onClick={() => handleSelect(title)}>
      <Title>{title}</Title>
    </Container>
  );
}
