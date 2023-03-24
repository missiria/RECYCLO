import {URL, PORT} from '@env'

/**
 * API URL & PORT
 */
export const API_PORT = PORT ? PORT : 3333
export const BASE_URL = URL ? `${URL}:${API_PORT}` : `http://app.eksneks.com:${API_PORT}`;

console.log('BASE_URL', BASE_URL);

export const API_URL = BASE_URL + "/api/v1/";
export const UPLOAD_FOLDER_URL = BASE_URL + "/files/";
export const DEFAULT_AVATAR_URL = BASE_URL + "/files/avatars/default.jpg";

export const IMAGE_AUTRE_URL = BASE_URL + "/files/collects/else.png";
