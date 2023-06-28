import { shallow } from 'enzyme';
import App from './App';

describe("App main wrapper", () => {
  it("should render without error", () => {
    shallow(<App />);
  });
});