export const POST_ENDPOINT = "/post"
export const PROFILE_ENDPOINT = "/profile"
export const MESSAGE_ENDPOINT = "/message"

export const POST = "POST"
export const PUT = "PUT"
export const GET = "GET"
export const DELETE = "DELETE"

export const toJson = (res: Response) => res.json();

export async function apiFetch(url: string, request?: RequestInit) {
  return fetch(`api${url}`, {
    ...request,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
