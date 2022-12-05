import instance from "../utils/axios";

export const getInvitationByUsername = async (username) =>
  await instance.get(`invitation/username/${username}`);

export const postGuestBook = async (username, payload) =>
  await instance.post(`invitation/guestbook/${username}`, payload);

export const postRSVP = async (username, payload) =>
  await instance.post(`invitation/rsvp/${username}`, payload);
