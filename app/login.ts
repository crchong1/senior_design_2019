import * as argon2 from "argon2";
import {Message} from "./error_messages"


export const generateHash = async (password : string) : Promise<string> => {
    try {
        const hash = await argon2.hash(password);
        return hash;
      } catch (err) {
        return Message.HASH_FAILURE;
      }
}

export const checkPassword = async (password_to_check : string, database_hash : string) : Promise<string> => {
    try {
        if (await argon2.verify(database_hash, password_to_check)) {
          return Message.AUTH_SUCCESS;
        } else {
          return Message.AUTH_FAILURE;
        }
      } catch (err) {
        return Message.HASH_FAILURE;
    }
}
