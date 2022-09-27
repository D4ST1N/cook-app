import axios from "axios";

const API_KEY = 'b89497edba458a3b76da6984afafc393bb41977f';
const flatIconsBaseUrl = 'https://api.flaticon.com/v3';
const storageTokenKey = 'flaticonToken';

class IconHelper {
  private token = localStorage.getItem(storageTokenKey) || '';

  constructor() {
    this.getToken();
  }

  async getToken() {
    const { data: { data: { token } } } = await axios.post(`${flatIconsBaseUrl}/app/authentication`, {
      apikey: API_KEY,
    });

    console.log(token);
    this.token = token;
    localStorage.setItem(storageTokenKey, token);
  }

  async searchIcon(query: string) {
    console.log(query, this.token);
    const { data } = await axios.post(
      `${flatIconsBaseUrl}/search/icons`,
      null,
      {
        params: {
          q: query,
        },
        headers: {
          'Authorization': `Bearer ${this.token}`,
        }
      },
    );

    console.log(data);
  }
}

export default (new IconHelper());
