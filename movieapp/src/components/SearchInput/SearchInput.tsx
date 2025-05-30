import { Button, Container, Input, InputWrapper, Label } from "./sytled";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

export function SearchInput({ value, onChange, onSubmit, isLoading }: Props) {
  return (
    <Container>
      <InputWrapper>
        <Label htmlFor="movie-search">Search Movies</Label>
        <Input
          id="movie-search"
          type="text"
          placeholder="Search movies..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSubmit(e)}
        />
      </InputWrapper>
      <Button onClick={onSubmit} disabled={isLoading}>
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </Container>
  );
}
