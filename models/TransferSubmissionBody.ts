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

import { TransferSubmissionBodyTransfer } from './TransferSubmissionBodyTransfer';
import { HttpFile } from '../http/http';

export class TransferSubmissionBody {
    'pubKey': string;
    'propagate': boolean;
    'transfer': TransferSubmissionBodyTransfer;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pubKey",
            "baseName": "pubKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "propagate",
            "baseName": "propagate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "TransferSubmissionBodyTransfer",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransferSubmissionBody.attributeTypeMap;
    }

    public constructor() {
    }
}
