module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"airbnb",
		"plugin:prettier/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"rules": {
		"react/react-in-jsx-scope": 0,
		"react/jsx-uses-react": 0,
		"semi": 0,
		"indent": ["error", "tab"],
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"import/extensions": 0,
		"import/prefer-default-export": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
		"react/jsx-indent" : [2, 'tab'],
		"react/jsx-indent-props" : [2, 'tab'],
		"jsx-quotes": [2, "prefer-single"]
	},
	"settings": {
		"import/resolver": {
			"webpack": {
				"config": "./config/webpack.config.js"
			}
		}
	},
	"globals": {
		"React": "readonly"
	}
}
