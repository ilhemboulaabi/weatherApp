import { mount } from "enzyme";
import Modal from "./Modal";
import { CloseButton, ModalContent, ModalWrapper } from "./styles";

describe("Modal", () => {
  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the modal when isOpen is true", () => {
    const wrapper = mount(
      <Modal isOpen={true} onClose={mockOnClose}>
        Modal Content
      </Modal>
    );

    expect(wrapper.find(ModalWrapper)).toHaveLength(1);
    expect(wrapper.find(ModalContent)).toHaveLength(1);
    expect(wrapper.find(CloseButton)).toHaveLength(1);
    expect(wrapper.text()).toContain("Modal Content");

    wrapper.unmount();
  });

  it("should not render the modal when isOpen is false", () => {
    const wrapper = mount(
      <Modal isOpen={false} onClose={mockOnClose}>
        Modal Content
      </Modal>
    );

    expect(wrapper.isEmptyRender()).toBe(true);

    wrapper.unmount();
  });

  it("should call onClose when the close button is clicked", () => {
    const wrapper = mount(
      <Modal isOpen={true} onClose={mockOnClose}>
        Modal Content
      </Modal>
    );

    wrapper.find(CloseButton).simulate("click");
    expect(mockOnClose).toHaveBeenCalled();

    wrapper.unmount();
  });

  it("should stop event propagation when clicking on the modal content", () => {
    const stopPropagationMock = jest.fn();
    const wrapper = mount(
      <Modal isOpen={true} onClose={mockOnClose}>
        Modal Content
      </Modal>
    );

    const modalContent = wrapper.find(ModalContent);
    modalContent.simulate("click", { stopPropagation: stopPropagationMock });
    expect(stopPropagationMock).toHaveBeenCalled();

    wrapper.unmount();
  });
});
