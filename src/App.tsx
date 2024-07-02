import Container from "react-bootstrap/Container";
import { SearchComponent } from "./search.component";

function App() {
  return (
    <>
      <Container
        className="py-5"
        style={{
          maxWidth: "576px",
        }}
      >
        <h1 className="display-5 text-center">BBC RSS Feed</h1>

        <SearchComponent
          fn={async (query: string) => {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            return new Array(3).fill(null).map((_, index) => {
              return {
                text: new Array(index + 1).fill(query).join(" "),
                value: `Item ${index + 1}`,
              };
            });
          }}
          label="Search"
          onSelect={(obj) => alert(obj.text)}
        />
      </Container>
    </>
  );
}

export default App;
