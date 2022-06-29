/**
 * vegawallet-service-client
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class OrderAmendmentBodyOrderAmendment {
    'marketId': string;
    'orderId'?: string;
    'reference'?: string;
    'timeInForce': string;
    'sizeDelta'?: string;
    'price'?: string;
    'expiresAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "marketId",
            "baseName": "marketId",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderId",
            "baseName": "orderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeInForce",
            "baseName": "timeInForce",
            "type": "string",
            "format": ""
        },
        {
            "name": "sizeDelta",
            "baseName": "sizeDelta",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderAmendmentBodyOrderAmendment.attributeTypeMap;
    }

    public constructor() {
    }
}

