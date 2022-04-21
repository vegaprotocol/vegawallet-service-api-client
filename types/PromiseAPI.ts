import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { GenericError } from '../models/GenericError';
import { GenericErrorErrors } from '../models/GenericErrorErrors';
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
import { WithdrawSubmissionBody } from '../models/WithdrawSubmissionBody';
import { WithdrawSubmissionBodyWithdrawSubmission } from '../models/WithdrawSubmissionBodyWithdrawSubmission';
import { WithdrawSubmissionBodyWithdrawSubmissionExt } from '../models/WithdrawSubmissionBodyWithdrawSubmissionExt';
import { WithdrawSubmissionBodyWithdrawSubmissionExtErc20 } from '../models/WithdrawSubmissionBodyWithdrawSubmissionExtErc20';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public authTokenDelete(_options?: Configuration): Promise<void> {
        const result = this.api.authTokenDelete(_options);
        return result.toPromise();
    }

    /**
     * @param inlineObject 
     */
    public authTokenPost(inlineObject: InlineObject, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.authTokenPost(inlineObject, _options);
        return result.toPromise();
    }

    /**
     * Sign a command (commit)
     */
    public commandCommitPost(_options?: Configuration): Promise<void> {
        const result = this.api.commandCommitPost(_options);
        return result.toPromise();
    }

    /**
     * Sign a command
     */
    public commandPost(_options?: Configuration): Promise<void> {
        const result = this.api.commandPost(_options);
        return result.toPromise();
    }

    /**
     * Sign a command (sync)
     * @param orderSubmissionBodyWithdrawSubmissionBody 
     */
    public commandSyncPost(orderSubmissionBodyWithdrawSubmissionBody?: OrderSubmissionBody | WithdrawSubmissionBody, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.commandSyncPost(orderSubmissionBodyWithdrawSubmissionBody, _options);
        return result.toPromise();
    }

    /**
     * List keys
     */
    public keysGet(_options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.keysGet(_options);
        return result.toPromise();
    }

    /**
     * Describe a key pair
     * @param keyid The public key
     */
    public keysKeyidGet(keyid: string, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.keysKeyidGet(keyid, _options);
        return result.toPromise();
    }

    /**
     * Annotate a key pair
     * @param keyid The public key
     */
    public keysKeyidMetadataPut(keyid: string, _options?: Configuration): Promise<void> {
        const result = this.api.keysKeyidMetadataPut(keyid, _options);
        return result.toPromise();
    }

    /**
     * Taint a key pair
     * @param keyid The public key
     */
    public keysKeyidTaintPut(keyid: string, _options?: Configuration): Promise<void> {
        const result = this.api.keysKeyidTaintPut(keyid, _options);
        return result.toPromise();
    }

    /**
     * Generate a key pair
     */
    public keysPost(_options?: Configuration): Promise<void> {
        const result = this.api.keysPost(_options);
        return result.toPromise();
    }

    /**
     */
    public networkGet(_options?: Configuration): Promise<void> {
        const result = this.api.networkGet(_options);
        return result.toPromise();
    }

    /**
     * Sign data
     */
    public signPost(_options?: Configuration): Promise<void> {
        const result = this.api.signPost(_options);
        return result.toPromise();
    }

    /**
     * Get the service status
     */
    public statusGet(_options?: Configuration): Promise<void> {
        const result = this.api.statusGet(_options);
        return result.toPromise();
    }

    /**
     * Verify data
     */
    public verifyPost(_options?: Configuration): Promise<void> {
        const result = this.api.verifyPost(_options);
        return result.toPromise();
    }

    /**
     * Get the wallet cli version
     */
    public versionGet(_options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.versionGet(_options);
        return result.toPromise();
    }

    /**
     * Import a wallet
     */
    public walletsImportPost(_options?: Configuration): Promise<void> {
        const result = this.api.walletsImportPost(_options);
        return result.toPromise();
    }

    /**
     * Create a wallet
     */
    public walletsPost(_options?: Configuration): Promise<void> {
        const result = this.api.walletsPost(_options);
        return result.toPromise();
    }


}



