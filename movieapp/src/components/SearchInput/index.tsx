import { Container, Input, InputWrapper, Label } from "./sytled";

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <Container>
      <InputWrapper>
        <Label htmlFor="movie-search">Search Movies</Label>
        <Input
          id="movie-search"
          type="text"
          placeholder="Type to search..."
          value={value}
          onChange={onChange}
        />
      </InputWrapper>
    </Container>
  );
}
