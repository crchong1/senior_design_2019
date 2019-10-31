import * as bcrypt from 'bcrypt';
import Message from './errorMessages';

const saltRounds : number = 10;

export const generateHash = async (password : string) : Promise<string> => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    return Message.HASH_FAILURE;
  }
};

export const checkPassword = async (passwordToCheck : string,
  databaseHash : string) : Promise<string> => {
  try {
    if (await bcrypt.compare(passwordToCheck, databaseHash)) {
      return Message.AUTH_SUCCESS;
    }
    return Message.AUTH_FAILURE;
  } catch (err) {
    return Message.HASH_FAILURE;
  }
};
