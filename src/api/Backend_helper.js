
import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

export const getTestApi = (page, perPage) => api.get(url.GET_TEST, { page, perPage });
