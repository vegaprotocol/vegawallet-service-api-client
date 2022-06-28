import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     */
    public authTokenDelete(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.authTokenDelete(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokenDelete(rsp)));
            }));
    }

    /**
     * @param authTokenDeleteRequest 
     */
    public authTokenPost(authTokenDeleteRequest: AuthTokenDeleteRequest, _options?: Configuration): Observable<AuthTokenDelete200Response> {
        const requestContextPromise = this.requestFactory.authTokenPost(authTokenDeleteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokenPost(rsp)));
            }));
    }

    /**
     * Sign a command (commit)
     */
    public commandCommitPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.commandCommitPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commandCommitPost(rsp)));
            }));
    }

    /**
     * Sign a command
     */
    public commandPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.commandPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commandPost(rsp)));
            }));
    }

    /**
     * Sign a command (sync)
     * @param commandSyncPostRequest 
     */
    public commandSyncPost(commandSyncPostRequest?: CommandSyncPostRequest, _options?: Configuration): Observable<TransactionResponse> {
        const requestContextPromise = this.requestFactory.commandSyncPost(commandSyncPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commandSyncPost(rsp)));
            }));
    }

    /**
     * List keys
     */
    public keysGet(_options?: Configuration): Observable<KeysGet200Response> {
        const requestContextPromise = this.requestFactory.keysGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keysGet(rsp)));
            }));
    }

    /**
     * Describe a key pair
     * @param keyid The public key
     */
    public keysKeyidGet(keyid: string, _options?: Configuration): Observable<KeysKeyidGet200Response> {
        const requestContextPromise = this.requestFactory.keysKeyidGet(keyid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keysKeyidGet(rsp)));
            }));
    }

    /**
     * Annotate a key pair
     * @param keyid The public key
     */
    public keysKeyidMetadataPut(keyid: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.keysKeyidMetadataPut(keyid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keysKeyidMetadataPut(rsp)));
            }));
    }

    /**
     * Taint a key pair
     * @param keyid The public key
     */
    public keysKeyidTaintPut(keyid: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.keysKeyidTaintPut(keyid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keysKeyidTaintPut(rsp)));
            }));
    }

    /**
     * Generate a key pair
     */
    public keysPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.keysPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keysPost(rsp)));
            }));
    }

    /**
     */
    public networkGet(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.networkGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.networkGet(rsp)));
            }));
    }

    /**
     * Sign data
     */
    public signPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.signPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.signPost(rsp)));
            }));
    }

    /**
     * Get the service status
     */
    public statusGet(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.statusGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statusGet(rsp)));
            }));
    }

    /**
     * Verify data
     */
    public verifyPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.verifyPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyPost(rsp)));
            }));
    }

    /**
     * Get the wallet cli version
     */
    public versionGet(_options?: Configuration): Observable<VersionGet200Response> {
        const requestContextPromise = this.requestFactory.versionGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionGet(rsp)));
            }));
    }

    /**
     * Import a wallet
     */
    public walletsImportPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.walletsImportPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.walletsImportPost(rsp)));
            }));
    }

    /**
     * Create a wallet
     */
    public walletsPost(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.walletsPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.walletsPost(rsp)));
            }));
    }

}
