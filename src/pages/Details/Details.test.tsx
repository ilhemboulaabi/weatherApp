import { shallow, ShallowWrapper } from 'enzyme';
import DetailsPage from './Details';
import { useHookSelector } from '../../hooks';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('DetailsPage', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    (useHookSelector as jest.Mock).mockReturnValue({
      weather: {
        cityDetails: {
          latitude: 40.7128,
          longitude: -74.0060,
          hourly: [],
          hourly_units: {
            time: '',
            temperature_2m: ''
          }
        }
      }
    });

    wrapper = shallow(<DetailsPage />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
