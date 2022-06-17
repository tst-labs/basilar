import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomSVG } from "./custom-svg";

const innerHTML = `
          <g>
            <path d="M388.041,108.886h-88.136V12.434C299.905,5.569,294.339,0,287.471,0H176.704c-6.865,0-12.434,5.568-12.434,12.434v96.452
              H76.143c-6.867,0-12.434,5.567-12.434,12.434v110.773c0,6.867,5.566,12.433,12.434,12.433h88.127v207.226
              c0,6.867,5.568,12.434,12.434,12.434h110.768c6.867,0,12.435-5.565,12.435-12.434V244.527h88.135
              c6.867,0,12.434-5.566,12.434-12.434V121.32C400.474,114.454,394.908,108.886,388.041,108.886z M375.607,219.66h-88.135
              c-6.867,0-12.434,5.567-12.434,12.434v207.224h-85.9V232.093c0-6.867-5.566-12.434-12.434-12.434H88.577v-85.906h88.127
              c6.867,0,12.434-5.566,12.434-12.434V24.868h85.9v96.452c0,6.867,5.565,12.434,12.434,12.434h88.135V219.66z"/>
          </g>`;
const larguraOriginal = 464.184;
const alturaOriginal = 464.185;

describe("CustomSVG", () => {
  test("Renderiza um SVG com sucesso", () => {
    render(
      <CustomSVG
        alturaOriginal={alturaOriginal}
        larguraOriginal={larguraOriginal}
        htmlInterno={innerHTML}
      />
    );

    const svgElement = screen.getByRole("img", { hidden: true });

    expect(svgElement).toBeInTheDocument();
  });
});
