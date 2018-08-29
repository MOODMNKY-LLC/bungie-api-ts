/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */
import { PagedQuery } from '../common';
import { PartnershipType } from '../platform';
import { UserInfoCard } from '../user/interfaces';
export declare const enum CommunityStatusSort {
    Viewers = 0,
    Trending = 1,
    OverallViewers = 2,
    Followers = 3
}
export interface SearchResultOfCommunityLiveStatus {
    readonly results: CommunityLiveStatus[];
    readonly totalResults: number;
    readonly hasMore: boolean;
    readonly query: PagedQuery;
    readonly replacementContinuationToken: string;
    /**
     * If useTotalResults is true, then totalResults represents an accurate count.
     *
     * If False, it does not, and may be estimated/only the size of the current page.
     *
     * Either way, you should probably always only trust hasMore.
     *
     * This is a long-held historical throwback to when we used to do paging with known
     * total results. Those queries toasted our database, and we were left to hastily
     * alter our endpoints and create backward- compatible shims, of which
     * useTotalResults is one.
     */
    readonly useTotalResults: boolean;
}
export interface CommunityLiveStatus {
    readonly dateStatusUpdated: string;
    readonly url: string;
    readonly partnershipIdentifier: string;
    readonly partnershipType: PartnershipType;
    readonly thumbnail: string;
    readonly thumbnailSmall: string;
    readonly thumbnailLarge: string;
    readonly destinyCharacterId: string;
    readonly userInfo: UserInfoCard;
    readonly currentActivityHash: number;
    readonly dateLastPlayed: string;
    readonly dateStreamStarted: string;
    readonly locale: string;
    readonly currentViewers: number;
    readonly followers: number;
    readonly overallViewers: number;
    readonly isFeatured: boolean;
    readonly title: string;
    readonly activityModeHash: number;
    readonly dateFeatured?: string;
    readonly trendingValue: number;
    readonly isSubscribable: boolean;
}
