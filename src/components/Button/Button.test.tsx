import { mount } from "enzyme";
import Button from "./Button";
import StyledButton from "./styles";

describe("Button", () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the button with label", () => {
    const label = "Click me";
    const wrapper = mount(
      <Button label={label} onClick={mockOnClick} />
    );

    expect(wrapper.find(StyledButton)).toHaveLength(1);
    expect(wrapper.find(StyledButton).text()).toBe(label);
    expect(wrapper.find(StyledButton).prop("disabled")).toBe(false);

    wrapper.unmount();
  });

  it("should execute the onClick", () => {
    const wrapper = mount(
      <Button label="Click me" onClick={mockOnClick} />
    );

    wrapper.find(StyledButton).simulate("click");
    expect(mockOnClick).toHaveBeenCalled();

    wrapper.unmount();
  });

  it("should prevent click execution when disabled is true", () => {
    const wrapper = mount(
      <Button label="Click me" onClick={mockOnClick} disabled={true} />
    );

    wrapper.find(StyledButton).simulate("click");
    expect(mockOnClick).not.toHaveBeenCalled();

    wrapper.unmount();
  });

  it("should apply the custom style to the button", () => {
    const customStyle = { color: "blue" };
    const wrapper = mount(
      <Button label="Click me" onClick={mockOnClick} style={customStyle} />
    );

    expect(wrapper.find(StyledButton).prop("style")).toEqual(customStyle);

    wrapper.unmount();
  });
});
