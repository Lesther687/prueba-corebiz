import { API } from "../config/config";

export const getProducts = async () => {
  try {
    let url = `${API}/products`;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    let response;
    const status = await request.status;

    switch (status) {
      case 200:
      case 201:
        response = await request.json();
        return response;
      case 204:
        return [];
      case 409:
        return Error;
      case 500:
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getProductsByID = async (id) => {
  try {
    let url = `${API}/products/${id}`;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    let response;
    const status = await request.status;

    switch (status) {
      case 200:
      case 201:
        response = await request.json();
        return response;
      case 204:
        return [];
      case 409:
        return Error;
      case 500:
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
};
