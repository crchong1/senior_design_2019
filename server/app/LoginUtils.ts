import {hash, verify} from 'argon2';
import Message from './errorMessages';


export const generateHash = async (password : string) : Promise<string> => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    return Message.HASH_FAILURE;
  }
};

export const checkPassword = async (passwordToCheck : string,
  databaseHash : string) : Promise<string> => {
  try {
    if (await argon2.verify(databaseHash, passwordToCheck)) {
      return Message.AUTH_SUCCESS;
    }
    return Message.AUTH_FAILURE;
  } catch (err) {
    return Message.HASH_FAILURE;
  }
};
