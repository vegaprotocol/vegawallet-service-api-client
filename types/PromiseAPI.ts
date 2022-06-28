import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AuthTokenDelete200Response } from '../models/AuthTokenDelete200Response';
import { AuthTokenDeleteRequest } from '../models/AuthTokenDeleteRequest';
import { CommandSyncPostRequest } from '../models/CommandSyncPostRequest';
import { DelegateSubmissionBody } from '../models/DelegateSubmissionBody';
import { DelegateSubmissionBodyDelegateSubmission } from '../models/DelegateSubmissionBodyDelegateSubmission';
import { GenericError } from '../models/GenericError';
import { GenericErrorErrors } from '../models/GenericErrorErrors';
import { KeysGet200Response } from '../models/KeysGet200Response';
import { KeysKeyidGet200Response } from '../models/KeysKeyidGet200Response';
import { OrderAmendmentBody } from '../models/OrderAmendmentBody';
import { OrderAmendmentBodyOrderSubmission } from '../models/OrderAmendmentBodyOrderSubmission';
import { OrderCancellationBody } from '../models/OrderCancellationBody';
import { OrderCancellationBodyOrderCancellation } from '../models/OrderCancellationBodyOrderCancellation';
import { OrderSubmissionBody } from '../models/OrderSubmissionBody';
import { OrderSubmissionBodyOrderSubmission } from '../models/OrderSubmissionBodyOrderSubmission';
import { TransactionResponse } from '../models/TransactionResponse';
import { TransactionResponseTx } from '../models/TransactionResponseTx';
import { TransactionResponseTxFrom } from '../models/TransactionResponseTxFrom';
import { TransactionResponseTxSignature } from '../models/TransactionResponseTxSignature';
import { UndelegateSubmissionBody } from '../models/UndelegateSubmissionBody';
import { UndelegateSubmissionBodyUndelegateSubmission } from '../models/UndelegateSubmissionBodyUndelegateSubmission';
import { VegaKey } from '../models/VegaKey';
import { VegaKeyAlgorithm } from '../models/VegaKeyAlgorithm';
import { VegaKeyMetaInner } from '../models/VegaKeyMetaInner';
import { VersionGet200Response } from '../models/VersionGet200Response';
import { VoteSubmissionBody } from '../models/VoteSubmissionBody';
import { VoteSubmissionBodyVoteSubmission } from '../models/VoteSubmissionBodyVoteSubmission';
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
     * @param authTokenDeleteRequest 
     */
    public authTokenPost(authTokenDeleteRequest: AuthTokenDeleteRequest, _options?: Configuration): Promise<AuthTokenDelete200Response> {
        const result = this.api.authTokenPost(authTokenDeleteRequest, _options);
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
     * @param commandSyncPostRequest 
     */
    public commandSyncPost(commandSyncPostRequest?: CommandSyncPostRequest, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.commandSyncPost(commandSyncPostRequest, _options);
        return result.toPromise();
    }

    /**
     * List keys
     */
    public keysGet(_options?: Configuration): Promise<KeysGet200Response> {
        const result = this.api.keysGet(_options);
        return result.toPromise();
    }

    /**
     * Describe a key pair
     * @param keyid The public key
     */
    public keysKeyidGet(keyid: string, _options?: Configuration): Promise<KeysKeyidGet200Response> {
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
    public versionGet(_options?: Configuration): Promise<VersionGet200Response> {
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



