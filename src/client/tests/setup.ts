import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";

import "jest-localstorage-mock";

expect.addSnapshotSerializer(createSerializer(emotion));

configure({ adapter: new Adapter() });
