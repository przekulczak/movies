import { Container, Button } from "./styled";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 2;

    for (
      let i = Math.max(1, currentPage - showPages);
      i <= Math.min(totalPages, currentPage + showPages);
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <Container>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {getPageNumbers().map((page) => (
        <Button
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </Container>
  );
}
