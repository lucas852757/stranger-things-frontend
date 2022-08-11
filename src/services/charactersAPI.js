/* https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#dia-251-deploy-com-heroku */
import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({ url = process.env.REACT_APIURL || 'http://localhost:3000', timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }//

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
