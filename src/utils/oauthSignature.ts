import crypto from "crypto-js";
import dotenv from "dotenv";
import { URLSearchParams } from "url";

dotenv.config();

interface OAuthParams {
	OAuthConsumerKey: string;
	OAuthToken: string;
	OAuthSignatureMethod: string;
	OAuthTimestamp: string;
	OAuthNonce: string;
	OAuthVersion: string;
}

interface RequestParams {
	url: string;
	method: string;
	params: Record<string, string | number>;
}

export const generateOAuthSignature = (
	requestParams: RequestParams,
	oauthParams: OAuthParams,
	consumerSecret: string,
	tokenSecret: string
): string => {
	const { url, method, params } = requestParams;

	const allParams = {
		...params,
		...oauthParams,
	};

	const sortedParams = Object.keys(allParams)
		.sort()
		.reduce((acc: Record<string, string>, key: unknown) => {
			acc[key as string] = String(allParams[key as keyof OAuthParams]);
			return acc;
		}, {});

	const paramString = new URLSearchParams(sortedParams).toString();

	const baseString = [
		method.toUpperCase(),
		encodeURIComponent(url),
		encodeURIComponent(paramString),
	].join("&");

	const signingKey = `${encodeURIComponent(
		consumerSecret
	)}&${encodeURIComponent(tokenSecret)}`;

	const signature = crypto
		.HmacSHA1(baseString, signingKey)
		.toString(crypto.enc.Base64);

	return signature;
};
