export * from './DelegateSubmissionBody';
export * from './DelegateSubmissionBodyDelegateSubmission';
export * from './GenericError';
export * from './GenericErrorErrors';
export * from './InlineObject';
export * from './InlineResponse200';
export * from './InlineResponse2001';
export * from './InlineResponse2002';
export * from './InlineResponse2003';
export * from './InlineResponse2004';
export * from './NetworkConfig';
export * from './NetworkConfigApi';
export * from './NetworkConfigApiGrpc';
export * from './NetworkConfigApiRest';
export * from './NetworkConfigTokenDApp';
export * from './OrderAmendmentBody';
export * from './OrderAmendmentBodyOrderAmendment';
export * from './OrderCancellationBody';
export * from './OrderCancellationBodyOrderCancellation';
export * from './OrderSubmissionBody';
export * from './OrderSubmissionBodyOrderSubmission';
export * from './TransactionResponse';
export * from './TransactionResponseTx';
export * from './TransactionResponseTxFrom';
export * from './TransactionResponseTxSignature';
export * from './TransferSubmissionBody';
export * from './TransferSubmissionBodyTransfer';
export * from './TransferSubmissionBodyTransferOneOff';
export * from './UndelegateSubmissionBody';
export * from './UndelegateSubmissionBodyUndelegateSubmission';
export * from './VegaKey';
export * from './VegaKeyAlgorithm';
export * from './VegaKeyMeta';
export * from './VoteSubmissionBody';
export * from './VoteSubmissionBodyVoteSubmission';
export * from './WithdrawSubmissionBody';
export * from './WithdrawSubmissionBodyWithdrawSubmission';
export * from './WithdrawSubmissionBodyWithdrawSubmissionExt';
export * from './WithdrawSubmissionBodyWithdrawSubmissionExtErc20';

import { DelegateSubmissionBody } from './DelegateSubmissionBody';
import { DelegateSubmissionBodyDelegateSubmission } from './DelegateSubmissionBodyDelegateSubmission';
import { GenericError } from './GenericError';
import { GenericErrorErrors } from './GenericErrorErrors';
import { InlineObject } from './InlineObject';
import { InlineResponse200 } from './InlineResponse200';
import { InlineResponse2001 } from './InlineResponse2001';
import { InlineResponse2002 } from './InlineResponse2002';
import { InlineResponse2003 } from './InlineResponse2003';
import { InlineResponse2004 } from './InlineResponse2004';
import { NetworkConfig } from './NetworkConfig';
import { NetworkConfigApi } from './NetworkConfigApi';
import { NetworkConfigApiGrpc } from './NetworkConfigApiGrpc';
import { NetworkConfigApiRest } from './NetworkConfigApiRest';
import { NetworkConfigTokenDApp } from './NetworkConfigTokenDApp';
import { OrderAmendmentBody } from './OrderAmendmentBody';
import { OrderAmendmentBodyOrderAmendment } from './OrderAmendmentBodyOrderAmendment';
import { OrderCancellationBody } from './OrderCancellationBody';
import { OrderCancellationBodyOrderCancellation } from './OrderCancellationBodyOrderCancellation';
import { OrderSubmissionBody } from './OrderSubmissionBody';
import { OrderSubmissionBodyOrderSubmission } from './OrderSubmissionBodyOrderSubmission';
import { TransactionResponse } from './TransactionResponse';
import { TransactionResponseTx } from './TransactionResponseTx';
import { TransactionResponseTxFrom } from './TransactionResponseTxFrom';
import { TransactionResponseTxSignature } from './TransactionResponseTxSignature';
import { TransferSubmissionBody } from './TransferSubmissionBody';
import { TransferSubmissionBodyTransfer } from './TransferSubmissionBodyTransfer';
import { TransferSubmissionBodyTransferOneOff } from './TransferSubmissionBodyTransferOneOff';
import { UndelegateSubmissionBody } from './UndelegateSubmissionBody';
import { UndelegateSubmissionBodyUndelegateSubmission  , UndelegateSubmissionBodyUndelegateSubmissionMethodEnum   } from './UndelegateSubmissionBodyUndelegateSubmission';
import { VegaKey } from './VegaKey';
import { VegaKeyAlgorithm } from './VegaKeyAlgorithm';
import { VegaKeyMeta } from './VegaKeyMeta';
import { VoteSubmissionBody } from './VoteSubmissionBody';
import { VoteSubmissionBodyVoteSubmission, VoteSubmissionBodyVoteSubmissionValueEnum    } from './VoteSubmissionBodyVoteSubmission';
import { WithdrawSubmissionBody } from './WithdrawSubmissionBody';
import { WithdrawSubmissionBodyWithdrawSubmission } from './WithdrawSubmissionBodyWithdrawSubmission';
import { WithdrawSubmissionBodyWithdrawSubmissionExt } from './WithdrawSubmissionBodyWithdrawSubmissionExt';
import { WithdrawSubmissionBodyWithdrawSubmissionExtErc20 } from './WithdrawSubmissionBodyWithdrawSubmissionExtErc20';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "UndelegateSubmissionBodyUndelegateSubmissionMethodEnum",
    "VoteSubmissionBodyVoteSubmissionValueEnum",
]);

let typeMap: {[index: string]: any} = {
    "DelegateSubmissionBody": DelegateSubmissionBody,
    "DelegateSubmissionBodyDelegateSubmission": DelegateSubmissionBodyDelegateSubmission,
    "GenericError": GenericError,
    "GenericErrorErrors": GenericErrorErrors,
    "InlineObject": InlineObject,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "NetworkConfig": NetworkConfig,
    "NetworkConfigApi": NetworkConfigApi,
    "NetworkConfigApiGrpc": NetworkConfigApiGrpc,
    "NetworkConfigApiRest": NetworkConfigApiRest,
    "NetworkConfigTokenDApp": NetworkConfigTokenDApp,
    "OrderAmendmentBody": OrderAmendmentBody,
    "OrderAmendmentBodyOrderAmendment": OrderAmendmentBodyOrderAmendment,
    "OrderCancellationBody": OrderCancellationBody,
    "OrderCancellationBodyOrderCancellation": OrderCancellationBodyOrderCancellation,
    "OrderSubmissionBody": OrderSubmissionBody,
    "OrderSubmissionBodyOrderSubmission": OrderSubmissionBodyOrderSubmission,
    "TransactionResponse": TransactionResponse,
    "TransactionResponseTx": TransactionResponseTx,
    "TransactionResponseTxFrom": TransactionResponseTxFrom,
    "TransactionResponseTxSignature": TransactionResponseTxSignature,
    "TransferSubmissionBody": TransferSubmissionBody,
    "TransferSubmissionBodyTransfer": TransferSubmissionBodyTransfer,
    "TransferSubmissionBodyTransferOneOff": TransferSubmissionBodyTransferOneOff,
    "UndelegateSubmissionBody": UndelegateSubmissionBody,
    "UndelegateSubmissionBodyUndelegateSubmission": UndelegateSubmissionBodyUndelegateSubmission,
    "VegaKey": VegaKey,
    "VegaKeyAlgorithm": VegaKeyAlgorithm,
    "VegaKeyMeta": VegaKeyMeta,
    "VoteSubmissionBody": VoteSubmissionBody,
    "VoteSubmissionBodyVoteSubmission": VoteSubmissionBodyVoteSubmission,
    "WithdrawSubmissionBody": WithdrawSubmissionBody,
    "WithdrawSubmissionBodyWithdrawSubmission": WithdrawSubmissionBodyWithdrawSubmission,
    "WithdrawSubmissionBodyWithdrawSubmissionExt": WithdrawSubmissionBodyWithdrawSubmissionExt,
    "WithdrawSubmissionBodyWithdrawSubmissionExtErc20": WithdrawSubmissionBodyWithdrawSubmissionExtErc20,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
