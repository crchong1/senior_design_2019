import * as argon2 from 'argon2';
import Message from './error_messages';


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
