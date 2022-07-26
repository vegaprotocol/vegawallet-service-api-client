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

import { NetworkConfigApi } from './NetworkConfigApi';
import { NetworkConfigTokenDApp } from './NetworkConfigTokenDApp';
import { HttpFile } from '../http/http';

export class NetworkConfig {
    'name'?: string;
    'level'?: string;
    'tokenExpiry'?: string;
    'port'?: number;
    'host'?: string;
    'api'?: NetworkConfigApi;
    'tokenDApp'?: NetworkConfigTokenDApp;
    'console'?: NetworkConfigTokenDApp;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenExpiry",
            "baseName": "tokenExpiry",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "api",
            "baseName": "api",
            "type": "NetworkConfigApi",
            "format": ""
        },
        {
            "name": "tokenDApp",
            "baseName": "tokenDApp",
            "type": "NetworkConfigTokenDApp",
            "format": ""
        },
        {
            "name": "console",
            "baseName": "console",
            "type": "NetworkConfigTokenDApp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NetworkConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

