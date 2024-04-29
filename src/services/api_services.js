import BASE_URL from "../configs/core";

const RsAPI = {
    get: async ({
        url, param, token
    }) => {
        const response = await fetch(url + new URLSearchParams(param), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
        });
        return response.json();
    },
    post: async ({ url, data, token }) => {
        const response = await fetch(BASE_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
            body: JSON.stringify(data),
        });
        return JSON.parse(await response.text());
    },
    put: async ({ url, data, id, token }) => {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
            body: JSON.stringify(data),
        });
        return response.json();
    },
    delete: async ({ url, id, token }) => {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
        });
        return response.json();
    },
    patch: async ({ url, data, id, token }) => {
        const response = await fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
            body: JSON.stringify(data),
        });
        return response.json();
    },
    list: async ({ url, size, page, sort, sortBy, search, other, token }) => {
        const queryParam = new URLSearchParams(
            {
                size: size,
                page: page,
                sort: sort,
                sortBy: sortBy,
                search: search,
                ...other,
            }
        );
        const response = await fetch(url + queryParam, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
        });
        return response.json();
    },
    show: async ({ url, id, token }) => {
        const response = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
        });
        return response.json();
    }
}

export default RsAPI;