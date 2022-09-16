import { SEND_EMAIL } from "./types";

export const setEmail = (payload) =>({
    type: SEND_EMAIL, payload,
})