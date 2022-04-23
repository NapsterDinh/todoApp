import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//config adapter 
configure({ adapter: new Adapter() });