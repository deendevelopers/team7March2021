import { apiFetch, PROFILE_ENDPOINT, toJson, POST, GET, PUT, DELETE, MESSAGE_ENDPOINT } from "."
import { ProfileInterface } from "../../models/profile"
import { SendMessageRequest } from '../../pages/api/post/message'

export const getProfiles = async (): Promise<ProfileInterface[]> => {
  return await apiFetch(PROFILE_ENDPOINT).then(toJson)
}

export const createProfile = async (profile: ProfileInterface): Promise<{ id: string }> => {
  return await apiFetch(PROFILE_ENDPOINT + "/create", {
    method: POST,
    body: JSON.stringify({ profile })
  }).then(toJson)
}

export const sendText = async (message: SendMessageRequest): Promise<number> => {
  return await apiFetch(MESSAGE_ENDPOINT + "/create", {
    method: POST,
    body: JSON.stringify({message })
  }).then(res => res.status);
}

export class ProfileNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "ProfileNotFoundError";
  }
}

export const signInAndGetProfile = async (authId: string): Promise<ProfileInterface | undefined> => {
  return await apiFetch(`${PROFILE_ENDPOINT}/authorised/${authId}`, {
    method: GET,
  }).then(res => {
    switch (res.status) {
      case 404:
        throw new ProfileNotFoundError("Not found")
      default:
        return res.json()
    }
  })
}

export const getProfileById = async (profileId: number): Promise<ProfileInterface | undefined> => {
  return await apiFetch(`${PROFILE_ENDPOINT}/${profileId}`, {
    method: GET,
  }).then(toJson)
}

export const updateProfileById = async (profile: ProfileInterface): Promise<{ id: string }> => {
  return await apiFetch(`${PROFILE_ENDPOINT}/${profile._id}`, {
    method: PUT,
    body: JSON.stringify({ profile })
  }).then(() => ({ id: `${profile._id}` }) )
}

export const deleteProfileById = async (profileId: number): Promise<{ id: string }> => {
  return await apiFetch(`${PROFILE_ENDPOINT}/${profileId}`, {
    method: DELETE,
  }).then(() => ({ id: `${profileId}` }) )
}