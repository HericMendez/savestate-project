import fetch from 'auth/FetchInterceptor'

const AuthService = {}

AuthService.login = function (data) {
	return fetch({
		url: '/auth/login',
		method: 'post',
		data: data
	})
}

AuthService.register = function (data) {
	return fetch({
		url: '/auth/register',
		method: 'post',
		data: data
	})
}

AuthService.logout = function () {
	return fetch({
		url: '/auth/logout',
		method: 'post'
	})
}

AuthService.loginInOAuth = function () {
	return fetch({
		url: '/auth/loginInOAuth',
		method: 'post'
	})
}




AuthService.twitchLogin = async function () {
	console.log("AuthService.twitchLogin ")
	console.log(import.meta.env.VITE_TWITCH_CLIENT_ID,import.meta.env.VITE_TWITCH_CLIENT_SECRET)
	try {
	  const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${import.meta.env.VITE_TWITCH_CLIENT_ID}&client_secret=${import.meta.env.VITE_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},

	  });
	console.log("AuthService.twitchLogin response:", response)
	  // Verifica se a resposta é bem-sucedida e retorna os dados
	  const data = await response;
	  console.log("data: ", response)
	  if (response.access_token) {
		return response;
	  } else {
		throw new Error('Erro na autenticação com Twitch');
	  }
	} catch (error) {
	  console.error('Erro na requisição de login com Twitch:', error);
	  throw error;
	}
  };

export default AuthService;


