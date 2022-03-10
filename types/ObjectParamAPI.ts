import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { InlineObject } from '../models/InlineObject';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { OrderSubmissionBody } from '../models/OrderSubmissionBody';
import { OrderSubmissionBodyOrderSubmission } from '../models/OrderSubmissionBodyOrderSubmission';
import { TransactionResponse } from '../models/TransactionResponse';
import { TransactionResponseTx } from '../models/TransactionResponseTx';
import { TransactionResponseTxFrom } from '../models/TransactionResponseTxFrom';
import { TransactionResponseTxSignature } from '../models/TransactionResponseTxSignature';
import { VegaKey } from '../models/VegaKey';
import { VegaKeyAlgorithm } from '../models/VegaKeyAlgorithm';
import { VegaKeyMeta } from '../models/VegaKeyMeta';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAuthTokenDeleteRequest {
}

export interface DefaultApiAuthTokenPostRequest {
    /**
     * 
     * @type InlineObject
     * @memberof DefaultApiauthTokenPost
     */
    inlineObject: InlineObject
}

export interface DefaultApiCommandCommitPostRequest {
}

export interface DefaultApiCommandPostRequest {
}

export interface DefaultApiCommandSyncPostRequest {
    /**
     * 
     * @type OrderSubmissionBody
     * @memberof DefaultApicommandSyncPost
     */
    orderSubmissionBody?: OrderSubmissionBody
}

export interface DefaultApiKeysGetRequest {
}

export interface DefaultApiKeysKeyidGetRequest {
    /**
     * The public key
     * @type string
     * @memberof DefaultApikeysKeyidGet
     */
    keyid: string
}

export interface DefaultApiKeysKeyidMetadataPutRequest {
    /**
     * The public key
     * @type string
     * @memberof DefaultApikeysKeyidMetadataPut
     */
    keyid: string
}

export interface DefaultApiKeysKeyidTaintPutRequest {
    /**
     * The public key
     * @type string
     * @memberof DefaultApikeysKeyidTaintPut
     */
    keyid: string
}

export interface DefaultApiKeysPostRequest {
}

export interface DefaultApiNetworkGetRequest {
}

export interface DefaultApiSignPostRequest {
}

export interface DefaultApiStatusGetRequest {
}

export interface DefaultApiVerifyPostRequest {
}

export interface DefaultApiVersionGetRequest {
}

export interface DefaultApiWalletsImportPostRequest {
}

export interface DefaultApiWalletsPostRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authTokenDelete(param: DefaultApiAuthTokenDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.authTokenDelete( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authTokenPost(param: DefaultApiAuthTokenPostRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.authTokenPost(param.inlineObject,  options).toPromise();
    }

    /**
     * Sign a command (commit)
     * @param param the request object
     */
    public commandCommitPost(param: DefaultApiCommandCommitPostRequest, options?: Configuration): Promise<void> {
        return this.api.commandCommitPost( options).toPromise();
    }

    /**
     * Sign a command
     * @param param the request object
     */
    public commandPost(param: DefaultApiCommandPostRequest, options?: Configuration): Promise<void> {
        return this.api.commandPost( options).toPromise();
    }

    /**
     * Sign a command (sync)
     * @param param the request object
     */
    public commandSyncPost(param: DefaultApiCommandSyncPostRequest, options?: Configuration): Promise<TransactionResponse> {
        return this.api.commandSyncPost(param.orderSubmissionBody,  options).toPromise();
    }

    /**
     * List keys
     * @param param the request object
     */
    public keysGet(param: DefaultApiKeysGetRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.keysGet( options).toPromise();
    }

    /**
     * Describe a key pair
     * @param param the request object
     */
    public keysKeyidGet(param: DefaultApiKeysKeyidGetRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.keysKeyidGet(param.keyid,  options).toPromise();
    }

    /**
     * Annotate a key pair
     * @param param the request object
     */
    public keysKeyidMetadataPut(param: DefaultApiKeysKeyidMetadataPutRequest, options?: Configuration): Promise<void> {
        return this.api.keysKeyidMetadataPut(param.keyid,  options).toPromise();
    }

    /**
     * Taint a key pair
     * @param param the request object
     */
    public keysKeyidTaintPut(param: DefaultApiKeysKeyidTaintPutRequest, options?: Configuration): Promise<void> {
        return this.api.keysKeyidTaintPut(param.keyid,  options).toPromise();
    }

    /**
     * Generate a key pair
     * @param param the request object
     */
    public keysPost(param: DefaultApiKeysPostRequest, options?: Configuration): Promise<void> {
        return this.api.keysPost( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public networkGet(param: DefaultApiNetworkGetRequest, options?: Configuration): Promise<void> {
        return this.api.networkGet( options).toPromise();
    }

    /**
     * Sign data
     * @param param the request object
     */
    public signPost(param: DefaultApiSignPostRequest, options?: Configuration): Promise<void> {
        return this.api.signPost( options).toPromise();
    }

    /**
     * Get the service status
     * @param param the request object
     */
    public statusGet(param: DefaultApiStatusGetRequest, options?: Configuration): Promise<void> {
        return this.api.statusGet( options).toPromise();
    }

    /**
     * Verify data
     * @param param the request object
     */
    public verifyPost(param: DefaultApiVerifyPostRequest, options?: Configuration): Promise<void> {
        return this.api.verifyPost( options).toPromise();
    }

    /**
     * Get the wallet cli version
     * @param param the request object
     */
    public versionGet(param: DefaultApiVersionGetRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.versionGet( options).toPromise();
    }

    /**
     * Import a wallet
     * @param param the request object
     */
    public walletsImportPost(param: DefaultApiWalletsImportPostRequest, options?: Configuration): Promise<void> {
        return this.api.walletsImportPost( options).toPromise();
    }

    /**
     * Create a wallet
     * @param param the request object
     */
    public walletsPost(param: DefaultApiWalletsPostRequest, options?: Configuration): Promise<void> {
        return this.api.walletsPost( options).toPromise();
    }

}
