require('dotenv').config();

module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using and other configs.
		{
		resolve: "gatsby-woocommerce-theme",
		options: {
			wordPressUrl: 'https://new.nextrend.com.au',
			gatsbySiteUrl: 'https://quench.media',
			googleTagManagerId: `${ process.env.GOOGLE_TAGMANAGER_ID }`,
			fbAppId: `${ process.env.FB_APP_ID }`
		}
	} ]
};
