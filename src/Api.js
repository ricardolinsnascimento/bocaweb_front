import axios from 'axios';

const api = axios.create({	
	baseURL: 'http://www.bocaweb.com.br/apiBocaweb'
});

export default api;