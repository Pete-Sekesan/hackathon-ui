import config from "../config";
import TokenService from "./token-service";

const AuthAPIService = {
  // used to register user
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  // used to login user by matching user in database
  loginUser(user) {
    return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  uploadImg(base64EncodedImage) {
    return fetch(`${config.API_ENDPOINT}/api/uploads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: base64EncodedImage }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getItems(item) {
    return fetch(`${config.API_ENDPOINT}/api/items`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postItem(item) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(`${config.API_ENDPOINT}/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(item),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteItem(item_id) {
    return fetch(`${config.API_ENDPOINT}/api/items/${item_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
    });
  },
  editWallet(wallet_id, wallet) {
    return fetch(`${config.API_ENDPOINT}/api/wallets/${wallet_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wallet),
    }).then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
    });
  },
  postConversation(conversation) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(`${config.API_ENDPOINT}/api/conversations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(conversation),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postMessage(message) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(`${config.API_ENDPOINT}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(message),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getConversation(conversations) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(`${config.API_ENDPOINT}/api/conversations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(conversations),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getMessage(conversation_id) {
    return fetch(`${config.API_ENDPOINT}/api/messages/${conversation_id}`, {
      method: "GET",
      headers: {
        Content_type: "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getItemById(item_id) {
    return fetch(`${config.API_ENDPOINT}/api/items/${item_id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getMyWallet(wallet) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(`${config.API_ENDPOINT}/api/wallet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(wallet),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postWallet(wallet) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(`${config.API_ENDPOINT}/api/wallet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(wallet),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getWallets(wallet) {
    return fetch(`${config.API_ENDPOINT}/api/wallet`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(wallet),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  shuffleCards() {
    return fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  dealCards(deckId) {
    return fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default AuthAPIService;
