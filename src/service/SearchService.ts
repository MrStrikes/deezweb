import instance from "./ApiService";

export async function search(type: string, q: string): Promise<any> {
  const res = await instance
    .get("/search", {
      params: {
        type,
        q
      }
    })
    .then(({ data }) => data.data)
    .catch(err => console.log(err)); // eslint-disable-line
  return Promise.resolve(res);
}
