import Form from "react-bootstrap/Form";

export function SearchComponent(props: {
  fn: (query: string) => Promise<Array<{ text: string; value: string }>>;
  label?: string | undefined;
  onSelect: (obj: { text: string; value: string }) => void;
}) {
  return (
    <Form.Group>
      {props.label ? (
        <Form.Label className="mb-1 text-muted">
          <small>{props.label}</small>
        </Form.Label>
      ) : null}
      <Form.Control />

      {[
        { text: "hello", value: "Item 1" },
        { text: "hello hello", value: "Item 2" },
        { text: "hello hello hello", value: "Item 3" },
      ].map((x, index) => (
        <div
          className="fw-semibold py-1"
          key={index}
          onClick={() => props.onSelect(x)}
          style={{ cursor: "pointer" }}
        >
          <small>{x.text}</small>
        </div>
      ))}
    </Form.Group>
  );
}
