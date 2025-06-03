import { Container, Button } from "./styled";
import { usePageParams } from "../../hooks";

interface Props {
  totalPages: number;
  disabled?: boolean;
}

export function Pagination({ totalPages, disabled }: Props) {
  const { page, setPage } = usePageParams();

  const getPageNumbers = () => {
    const pages = [];
    const showPages = 2;

    for (
      let i = Math.max(1, page - showPages);
      i <= Math.min(totalPages, page + showPages);
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <Container>
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page === 1 || disabled}
      >
        Previous
      </Button>

      {getPageNumbers().map((pageNumber) => (
        <Button
          key={pageNumber}
          $active={pageNumber === page}
          onClick={() => setPage(pageNumber)}
          disabled={disabled}
        >
          {pageNumber}
        </Button>
      ))}

      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages || disabled}
      >
        Next
      </Button>
    </Container>
  );
}
