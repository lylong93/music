import axios from 'axios';

var insrance = axios.create({
	baseURL: "/user",
	timeout: 1000,
})