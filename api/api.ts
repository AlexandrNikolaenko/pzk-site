/* eslint-disable @typescript-eslint/no-explicit-any */

class HttpRequest {
  #api_host: string;

  constructor() {
    this.#api_host = "http://178.72.150.74/api";
  }

  async get({ onError, onSuccess, query }: GetQuery & {query: string}) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "GET",
        cache: "no-cache",
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async post({ onError, onSuccess, body, query }: PostQuery & {query: string}) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw await res.json()
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async put({ onError, onSuccess, body, query }: PostQuery & {query: string}) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async patch({ onError, onSuccess, body, query }: PostQuery & {query: string}) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async delete({ onError, onSuccess, query }: GetQuery & {query: string}) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(String(res.status));
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }
}

interface PostQuery {
  body: object;
  onSuccess: (data: object) => void;
  onError: (error: any) => void;
}

interface GetQuery {
  onSuccess: (data: object) => void;
  onError: (error: any) => void;
}

export default class Api {
  #httpRequest: HttpRequest;

  constructor() {
    this.#httpRequest = new HttpRequest();
  }

  async addLead({body, onSuccess, onError}: PostQuery) {
    return await this.#httpRequest.post({
      query: '/createlead',
      body,
      onSuccess,
      onError
    })
  }
}