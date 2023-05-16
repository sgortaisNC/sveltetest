export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.9a3f54c6.js","app":"_app/immutable/entry/app.8f5a749a.js","imports":["_app/immutable/entry/start.9a3f54c6.js","_app/immutable/chunks/index.996ad52e.js","_app/immutable/chunks/singletons.4ef49cc6.js","_app/immutable/entry/app.8f5a749a.js","_app/immutable/chunks/index.996ad52e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/nc-click",
				pattern: /^\/nc-click\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
