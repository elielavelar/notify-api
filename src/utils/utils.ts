import { v4 as uuidv4 } from 'uuid';
const generateRandomToken = () => {
  return uuidv4();
};

export { generateRandomToken };
